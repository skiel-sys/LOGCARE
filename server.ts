import express from 'express';
import path from 'path';
import http from 'http';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to sanitize and clean API keys
function cleanKey(rawKey: string | undefined): string {
  if (!rawKey) return '';
  return rawKey
    .trim()
    .replace(/^(export\s+)?(GEMINI_API_KEY|API_KEY)\s*[:=]\s*/i, '')
    .replace(/^["'`]|["'`]$/g, '')
    .trim();
}

function normalizeModel(model?: string): string {
  if (!model) return 'gemini-3.6-flash';
  const m = model.trim().toLowerCase();
  if (m.includes('2.0') || m.includes('1.5') || m.includes('gemini-pro') || m.includes('thinking')) {
    return 'gemini-3.6-flash';
  }
  return model.trim();
}

function getEffectiveKey(clientKey?: string): string {
  const cleanedClient = cleanKey(clientKey);
  if (cleanedClient) return cleanedClient;
  const envKey = cleanKey(process.env.GEMINI_API_KEY);
  if (envKey && envKey !== 'MY_GEMINI_API_KEY') return envKey;
  return '';
}

// API: System Status & Available Credentials
app.get('/api/status', (req, res) => {
  const envKey = cleanKey(process.env.GEMINI_API_KEY);
  const hasBuiltInKey = Boolean(envKey && envKey !== 'MY_GEMINI_API_KEY');

  res.json({
    status: 'ok',
    hasBuiltInKey,
    recommendedModel: 'gemini-3.6-flash',
    supportedModels: [
      { id: 'gemini-3.6-flash', label: 'gemini-3.6-flash (Recommended Free Tier - High Speed)' },
      { id: 'gemini-3.8-flash', label: 'gemini-3.8-flash (Standard Carelog Generation)' },
      { id: 'gemini-2.5-flash', label: 'gemini-2.5-flash (Next-Gen Flash)' },
      { id: 'gemini-flash-latest', label: 'gemini-flash-latest (Auto-Updating)' }
    ]
  });
});

// API: Diagnostic Test Key endpoint
app.post('/api/test-key', async (req, res) => {
  try {
    const rawKey = req.body?.apiKey;
    const requestedModel = req.body?.model;
    const model = normalizeModel(requestedModel);
    const effectiveKey = getEffectiveKey(rawKey);

    if (!effectiveKey) {
      return res.status(400).json({
        ok: false,
        errorType: 'MISSING_KEY',
        message: 'No API key provided, and no built-in key configured.',
        hint: 'Please paste your Google Gemini API key from https://aistudio.google.com/app/apikey'
      });
    }

    // Models to try during diagnostic test
    const testModels = Array.from(new Set([model, 'gemini-3.6-flash', 'gemini-3.8-flash', 'gemini-2.5-flash']));
    let lastError: any = null;
    let verifiedModel: string | null = null;
    let replyText = 'OK';

    for (const tryModel of testModels) {
      // First try with modern @google/genai SDK
      try {
        const ai = new GoogleGenAI({
          apiKey: effectiveKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build'
            }
          }
        });

        const response = await ai.models.generateContent({
          model: tryModel,
          contents: 'Respond with OK.'
        });

        if (response.text) {
          verifiedModel = tryModel;
          replyText = response.text.trim();
          break;
        }
      } catch (sdkErr: any) {
        lastError = sdkErr;
        // If it's an authentication error or rate limit, no need to try other models
        const errMsg = sdkErr.message || '';
        if (errMsg.includes('API_KEY_INVALID') || errMsg.includes('400') || errMsg.includes('403') || errMsg.includes('429')) {
          break;
        }
      }

      // Fallback: direct HTTP ping
      try {
        const testEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${tryModel}:generateContent?key=${effectiveKey}`;
        const testResponse = await fetch(testEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: 'Respond with OK.' }] }]
          })
        });

        if (testResponse.ok) {
          const data = await testResponse.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'OK';
          verifiedModel = tryModel;
          break;
        } else {
          const errData = await testResponse.json().catch(() => ({}));
          lastError = {
            status: testResponse.status,
            message: errData.error?.message || testResponse.statusText
          };
          if (testResponse.status === 400 || testResponse.status === 403 || testResponse.status === 429) {
            break;
          }
        }
      } catch (httpErr: any) {
        lastError = httpErr;
      }
    }

    if (verifiedModel) {
      return res.json({
        ok: true,
        message: `API Key is active and verified! Connected successfully to ${verifiedModel}.`,
        model: verifiedModel,
        sampleReply: replyText,
        isUsingBuiltInKey: !cleanKey(rawKey) && Boolean(process.env.GEMINI_API_KEY)
      });
    }

    const statusCode = lastError?.status || 400;
    const errMsg = lastError?.message || 'Connection failed.';
    let hint = 'Please check that your API key is copied accurately from Google AI Studio.';
    let errorType = 'API_ERROR';

    if (statusCode === 400 || errMsg.includes('API_KEY_INVALID')) {
      errorType = 'INVALID_KEY';
      hint = 'Google reported this API key is invalid. Ensure you copied the entire key starting with "AIzaSy" from Google AI Studio.';
    } else if (statusCode === 403) {
      errorType = 'PERMISSION_DENIED';
      hint = 'Generative Language API is disabled or key has restrictions. Create a new free key in Google AI Studio.';
    } else if (statusCode === 429) {
      errorType = 'RATE_LIMIT';
      hint = 'Rate limit reached on Google free tier. Please wait 20-30 seconds before retrying.';
    } else if (statusCode === 404) {
      errorType = 'MODEL_NOT_FOUND';
      hint = `Model not found. Switched automatically to gemini-3.6-flash.`;
    }

    return res.status(statusCode).json({
      ok: false,
      statusCode,
      errorType,
      message: errMsg,
      hint
    });
  } catch (error: any) {
    return res.status(500).json({
      ok: false,
      errorType: 'SERVER_ERROR',
      message: error.message || 'An unexpected connection error occurred.',
      hint: 'Verify your internet connectivity and ensure Google Generative Language endpoints are accessible.'
    });
  }
});

// API: Generate Care Log Endpoint
app.post('/api/generate-care-log', async (req, res) => {
  try {
    const { apiKey, model: requestedModel, prompt, systemInstruction } = req.body;
    const model = normalizeModel(requestedModel);
    const effectiveKey = getEffectiveKey(apiKey);

    if (!effectiveKey) {
      return res.status(400).json({
        ok: false,
        error: 'Missing API key. Please provide a Gemini API key or enable the built-in AI Studio key.'
      });
    }

    if (!prompt) {
      return res.status(400).json({
        ok: false,
        error: 'Prompt is required.'
      });
    }

    // Prioritized list of active, supported models
    const modelsToTry = Array.from(new Set([model, 'gemini-3.6-flash', 'gemini-3.8-flash', 'gemini-2.5-flash', 'gemini-flash-latest']));

    let lastError: any = null;
    let generatedText: string | null = null;
    let successfulModel = model;

    for (const tryModel of modelsToTry) {
      // Approach 1: Modern @google/genai SDK
      try {
        const ai = new GoogleGenAI({
          apiKey: effectiveKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build'
            }
          }
        });

        const response = await ai.models.generateContent({
          model: tryModel,
          contents: prompt,
          config: {
            systemInstruction: systemInstruction || undefined,
            temperature: 0.65,
            topP: 0.95
          }
        });

        if (response.text) {
          generatedText = response.text;
          successfulModel = tryModel;
          break;
        }
      } catch (sdkErr: any) {
        lastError = sdkErr;
        const msg = sdkErr.message || '';
        if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED')) {
          throw new Error('Google Free Tier rate limit reached. Please wait 20-30 seconds and retry.');
        }
        if (msg.includes('API_KEY_INVALID') || msg.includes('403')) {
          throw new Error(`Gemini API Authentication Error: ${msg}`);
        }
      }

      // Approach 2: Direct HTTP fetch fallback
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${tryModel}:generateContent?key=${effectiveKey}`;

        const payloadWithSys = {
          systemInstruction: systemInstruction ? {
            parts: [{ text: systemInstruction }]
          } : undefined,
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.65,
            topP: 0.95
          }
        };

        let response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payloadWithSys)
        });

        // If 400 error (systemInstruction unsupported in some endpoints), retry combining prompt
        if (response.status === 400 && systemInstruction) {
          const combinedPrompt = `[MASTER SYSTEM INSTRUCTION & DOCUMENTATION RULES]\n${systemInstruction}\n\n[CAREGIVER DOCUMENTATION SESSION REQUEST]\n${prompt}`;
          const fallbackPayload = {
            contents: [
              {
                role: 'user',
                parts: [{ text: combinedPrompt }]
              }
            ],
            generationConfig: {
              temperature: 0.65,
              topP: 0.95
            }
          };

          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fallbackPayload)
          });
        }

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          const errMsg = errData.error?.message || response.statusText;
          lastError = { status: response.status, message: errMsg, model: tryModel };

          if (response.status === 404) {
            continue; // try next model
          }
          if (response.status === 429) {
            throw new Error(`Rate limit exceeded (${response.status}): ${errMsg}. Please wait 20-30 seconds and retry.`);
          }
          if (response.status === 400 || response.status === 403) {
            throw new Error(`Gemini API Authentication Error (${response.status}): ${errMsg}`);
          }
          continue;
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          generatedText = text;
          successfulModel = tryModel;
          break;
        }
      } catch (err: any) {
        lastError = err;
        if (err.message && (err.message.includes('Authentication Error') || err.message.includes('Rate limit') || err.message.includes('rate limit'))) {
          throw err;
        }
      }
    }

    if (!generatedText) {
      const msg = lastError?.message || 'Failed to generate logs from Gemini API.';
      return res.status(lastError?.status || 500).json({
        ok: false,
        error: msg,
        details: lastError
      });
    }

    return res.json({
      ok: true,
      text: generatedText,
      modelUsed: successfulModel
    });

  } catch (error: any) {
    console.error('Server generate error:', error);
    return res.status(500).json({
      ok: false,
      error: error.message || 'Internal server error while generating care log.'
    });
  }
});

// Vite middleware in dev or static files in prod
async function startServer() {
  const server = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        // HMR is fully disabled so the client never opens a WebSocket. This
        // removes the "WebSocket closed without opened / connection failed"
        // errors in the preview. Code changes require a manual page refresh.
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`CARELOG VA Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
