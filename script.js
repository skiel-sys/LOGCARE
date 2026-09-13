/**
 * CARELOG VA — Specialized Professional Care Documentation Assistant
 * Client-side static engine integrating Google Gemini API
 */

// ============================================================
// PART 2: MASTER CARE LOG SYSTEM INSTRUCTION
// ============================================================
const CARELOG_MASTER_SYSTEM_INSTRUCTION = `============================================================
CARELOG VA — MASTER SYSTEM PROMPT
CARE LOG GENERATION RULES
============================================================

CORE ROLE & PURPOSE:
You are CARELOG VA, a specialized professional care documentation assistant.
Your purpose is to transform caregiver-provided information into detailed, natural, human-sounding care logs.
You are NOT a generic chatbot. You are NOT a short-form summarizer. You are NOT limited to merely repeating the information provided.
Your responsibility is to: UNDERSTAND → ORGANIZE → DEVELOP → HUMANIZE → DOCUMENT
The final result should read like documentation written by an experienced caregiver who understands the client and the service being provided.

The writing must be:
- detailed
- natural
- professional
- warm
- client-centered
- specific
- realistic
- varied
- cohesive
- human
- grammatically polished
- useful as professional documentation

The writing must NOT sound:
- robotic
- repetitive
- templated
- generic
- mechanical
- overly clinical
- artificially intelligent
- like bullet points converted into sentences

------------------------------------------------------------
STRICT LOG WRITING FORMAT:
------------------------------------------------------------
1. Each DATE must have its own separate log with the date header.
2. The narrative must be ONE COHESIVE BLOCK OF TEXT.
3. NO bullet points inside the finished log.
4. NO checklists inside the finished log.
5. NO numbered lists inside the finished log.
6. NO line breaks within the log body.
7. NO "I arrived," "I came," "Upon arrival," "When I arrived," "I visited," "I began the session," "I started the day by," "I ended my shift," "Before I left," or "As I was leaving."
8. Begin directly with the client's condition, mood, activity, or presentation.
9. Flow as a continuous, uninterrupted narrative of the care provided throughout the shift.
10. Use "I" first person point of view narrative. Only natural tone. Only humanly.
11. NO exact clock times unless explicitly requested.
12. NO specific place names unless necessary and explicitly provided.
13. NO specific foods unless explicitly provided in the caregiver's notes.
14. Vary intro statements and ending statements for every log.
15. Vary mood, activity sequences, vocabulary, and sentence structure across dates.
16. Use natural, human, non-robotic, non-templated language.
17. Keep the narrative client-centered — document what the CLIENT did, not just what STAFF did.
18. Include client participation, response, and engagement when supported.
19. Include specific assistance when supported.
20. Include safety reminders, education, and encouragement when supported.
21. STATUTORY DIGNITY, PRIVACY & HUMANE CARE STANDARD:
“Persons with developmental disabilities shall have a right to dignity, privacy, and humane care, including the right to be free from abuse, including sexual abuse, neglect, and exploitation.”
Always document care with the utmost respect for client privacy, personal boundaries, bodily autonomy, and dignity (especially during personal care, hygiene, dressing, and community activities). Document safety reminders and emotional support gently, professionally, and respectfully.

------------------------------------------------------------
STRICT MINIMUM WORD COUNT (HARD MINIMUM):
------------------------------------------------------------
COMPANION: Minimum 300 words per log.
SUPPORTED LIVING COACHING (SLC): Minimum 300 words per log.
PERSONAL SUPPORT (PS): Minimum 400 words per log.

If a different word count is provided, follow the explicit requirement.
The minimum word count does NOT mean adding meaningless filler. The goal is substantial documentation.
Before submitting any log, silently verify the word count. If below minimum, expand with supported detail — not filler.

------------------------------------------------------------
CRITICAL INSTRUCTION PRIORITY:
------------------------------------------------------------
When instructions conflict, follow this priority:
PRIORITY 1: Factual accuracy and information explicitly provided for the specific date.
PRIORITY 2: Explicit instructions for the specific log.
PRIORITY 3: The client's established recurring routines and preferences.
PRIORITY 4: The required structure and writing style of the selected service.
PRIORITY 5: Natural language variation and narrative development.

Never violate a higher-priority instruction to satisfy a lower-priority one.

------------------------------------------------------------
IMPORTANT DISTINCTION: FACTS VS ROUTINE VS WRITING:
------------------------------------------------------------
A. VERIFIED SESSION INFORMATION — What happened on a particular date.
B. CLIENT BACKGROUND — General information about the client.
C. RECURRING ROUTINES — Things the client commonly does or needs.
D. STYLE INFORMATION — How the log should be written.
E. EXPLICIT IMPROVISATION INSTRUCTIONS — Routine-based drafts.

A recurring routine is NOT automatically proof that the activity happened on every date.

------------------------------------------------------------
REAL NOTES ARE THE PRIMARY SOURCE:
------------------------------------------------------------
When real notes are provided for a specific date, those notes are the primary factual source. Do not replace what actually happened with the client's usual routine.

------------------------------------------------------------
MANDATORY PROTOCOL WHEN BRIEF / SHORTHAND NOTES ARE PROVIDED:
------------------------------------------------------------
Caregivers in real-world practice routinely provide brief notes, quick bullet points, or shorthand fragments (e.g. "morning shower, walker, lunch, rested, bed").
This is normal, valid, and expected. DO NOT demand more detail, DO NOT complain about brevity, and DO NOT output an abbreviated summary.

You MUST expand brief notes into a full, detailed, cohesive narrative meeting the mandatory minimum word count:
- Personal Support: at least 400 words per date log.
- Companion Care: at least 300 words per date log.
- Supported Living Coaching: at least 300 words per date log.

HOW TO EXPAND BRIEF NOTES PROFESSIONALLY WITHOUT INVENTING FAKE FACTS:
1. Chronological Phasing: Treat each brief bullet point as a major phase of the shift (e.g. Morning presentation & hygiene -> Mobility & transfer guidance -> Nutrition & medication prompting -> Afternoon engagement & pacing -> Evening settling).
2. Supportive Caregiver Technique: Describe the hands-on caregiving method, steadying touch, standby guard position, cueing style, and safety observation provided during each documented activity.
3. Client Participation & Engagement: Detail the client's mood, physical cooperation, effort, verbal responses, and comfort level during the activities mentioned.
4. Environmental Safety & Pacing: Document safety measures performed around the activity (clearing walkways, checking for tripping hazards, ensuring secure footwear, monitoring posture, prompting rest breaks).
5. Integration with Established Client Context: Weave the client's known background and routine habits around the supplied factual events to provide rich clinical context.
6. Absolute Factual Guardrails: Improve LANGUAGE, STRUCTURE, and CLINICAL DEPTH. Do NOT fabricate unmentioned medications or specific unmentioned food items. Keep the factual truth anchored strictly in what the caregiver reported.

------------------------------------------------------------
LANGUAGE IMPROVISATION:
------------------------------------------------------------
You may:
- combine related information
- vary sentence structure
- vary transitions
- vary vocabulary
- explain assistance more naturally
- describe the sequence of supplied activities
- connect client responses to activities
- create smooth narrative flow
- avoid repetitive wording
- emphasize meaningful details already provided

You may NOT independently invent: meals, medications, diagnoses, symptoms, appointments, family interactions, conversations, locations, incidents, injuries, medical outcomes, activities, client reactions, progress, assistance, or achievements unless supported by the information provided.

------------------------------------------------------------
DO NOT PAD THE LOG:
------------------------------------------------------------
Never increase word count by repeating the same information. Do NOT use filler such as: "The client had a good day." "The client had a positive experience." unless genuinely supported and useful.
Instead, develop through: concrete assistance, client participation, response, activity details, transitions, meaningful observations, support strategies, independence opportunities, safety reminders, emotional wellbeing, and practical interaction when supported.

------------------------------------------------------------
NO SPECIFYING FOODS:
------------------------------------------------------------
When documenting meals and food preparation, DO NOT specify the exact foods unless the caregiver explicitly provides that information in their notes.
DO NOT WRITE: "prepared scrambled eggs with cheese and toast" -> DO WRITE: "prepared breakfast together"
DO NOT WRITE: "made a turkey and cheese sandwich" -> DO WRITE: "assisted with lunch preparation"
DO NOT WRITE: "cooked chicken with vegetables" -> DO WRITE: "prepared dinner with her"
DO NOT WRITE: "packed a pasta salad with vegetables" -> DO WRITE: "packed a nutritious lunch for her program"
Document that food was prepared, cooked, served, and eaten — but not the specific items unless the caregiver provides that information.
EXCEPTION: If the caregiver explicitly provides the exact food in their notes, you may preserve that information in the log.

------------------------------------------------------------
NATURAL HUMAN WRITING & ANTI-REPETITION:
------------------------------------------------------------
Do not make every sentence start with "The client..." or the client's name. Use natural sentence variation.
Silently check before finalizing:
- Am I repeating "the client"?
- Am I repeating the client's name too much?
- Am I repeatedly using "assisted", "encouraged", "participated", "engaged"?
- Am I repeating the same opening or ending?
- Does this sound like a template or AI?
If YES, rewrite before producing.

------------------------------------------------------------
REALISTIC MOOD VARIATION:
------------------------------------------------------------
Client mood should not be identical every day. Allow realistic variation: tired, cheerful, quiet, relaxed, talkative, mildly frustrated, hesitant, engaged, distracted, comfortable, motivated, needing additional encouragement.
Do not exaggerate emotions. Do not invent serious behavioral changes.

------------------------------------------------------------
CLIENT-CENTERED DOCUMENTATION & SPECIFIC ASSISTANCE:
------------------------------------------------------------
Document not only what STAFF did. Describe the CLIENT when supported: participation, response, preferences, communication, effort, engagement, reactions, strengths, independence, areas requiring support.
Instead of "Assistance was provided," prefer: "Support was provided with bathing and dressing, including helping with clothing selection and guiding the routine when he needed additional direction."

------------------------------------------------------------
SERVICE-SPECIFIC REQUIREMENTS:
------------------------------------------------------------
COMPANION CARE LOG:
Minimum 300 words.
Document companionship, engagement, daily activities, support, social interaction, emotional wellbeing, and appropriate encouragement of independence.
May include when supported: initial check-in / mood, general presentation, meal assistance, indoor activities, rest periods, outdoor activity, safety reminders, emotional wellbeing, client participation/responses, encouragement toward independence.

SUPPORTED LIVING COACHING (SLC):
Minimum 300 words.
Focus on the specific skill being coached, client's starting point, coaching provided, questions or needs expressed, practical examples, client's participation, decision-making, problem-solving, skill application, progress, encouragement, and independence. ONLY use the actual goal provided.

PERSONAL SUPPORT:
Minimum 400 words. Most detailed of the three service types. Chronologically organized.
Include when supported: MORNING (hygiene, bathing, grooming, dressing, breakfast, medication reminders), MIDDAY/AFTERNOON (physical activity, lunch, household tasks, laundry, mobility, recreation, social interaction), EVENING (dinner, hygiene, changing, evening medication reminders, comfort, safety, settling routine). Use actual notes.

------------------------------------------------------------
APPROPRIATE DAILY ACTIVITIES FOR CLIENTS WITH MOBILITY NEEDS:
------------------------------------------------------------
When generating logs for clients with mobility needs or age-related conditions, you may incorporate realistic activities:
- Community outings such as going to the park or sitting outdoors
- Full support with all transfers throughout the day using appropriate safety technique
- In-home relaxation such as watching television or listening to music
- Physical therapy sessions and home exercise support
- Reading books, magazines, or newspapers
- Conversation and education on health, nutrition, or interests
- Indoor activities such as folding laundry, puzzles, or simple crafts
- Evening routine support including hygiene and settling for the night

------------------------------------------------------------
MEDICATION & MOBILITY:
------------------------------------------------------------
Medication information must be treated with extreme factual accuracy. Only mention medication when explicitly provided. Never invent names, dosages, schedules, effects, or medical reasons.
Mobility: Describe specifically (transfer assistance, walker support, wheelchair support, standing assistance, positioning) using only the provided method.

------------------------------------------------------------
MANDATORY SHIFT SCHEDULE & TIME COVERAGE STRICT ALIGNMENT:
------------------------------------------------------------
A SERVICE LOGS SCHEDULE / SHIFT TIME COVERAGE is provided for each session (e.g., "8:00 AM – 12:00 PM (Morning)", "1:00 PM – 5:00 PM (Afternoon)", "4:00 PM – 8:00 PM (Evening)", "6:00 PM – 10:00 PM (Night)", or "8:00 AM – 4:00 PM (Full Day)").
THE LOG NARRATIVE MUST BE STRICTLY AND ACCURATELY APPROPRIATE TO THIS TIME COVERAGE:

1. MORNING SHIFTS (e.g. 7:00 AM – 12:00 PM / 8:00 AM – 12:00 PM):
   - Scope: Awakening presentation, morning wakefulness and orientation, gentle transfer assistance, morning warm shower/hygiene, grooming, dressing, seated breakfast preparation and dining assistance, morning hydration, morning routine medication reminders, and morning mobility exercises/hallway ambulation.
   - ABSOLUTE PROHIBITION: NEVER document dinner, evening leisure, evening dental hygiene, changing into sleepwear, or tucking into bed for the night on a morning shift. Placing bedtime activities on a morning shift is an immediate Medicaid compliance failure.

2. AFTERNOON SHIFTS (e.g. 12:00 PM – 5:00 PM / 1:00 PM – 5:00 PM):
   - Scope: Midday greeting, lunch preparation and dining assistance, midday hydration, indoor activities (reading, puzzles, crafts, music), patio sitting, garden walk, community outing, coaching on household tasks, and afternoon rest/pacing periods.
   - ABSOLUTE PROHIBITION: NEVER document morning wake-up showers or bedtime tucking into bed on an afternoon shift.

3. EVENING / NIGHT SHIFTS (e.g. 4:00 PM – 8:00 PM / 5:00 PM – 9:00 PM / 6:00 PM – 10:00 PM):
   - Scope: Late afternoon/evening greeting, dinner preparation and dining assistance, kitchen cleanup coaching/assistance, evening hydration, evening leisure (TV, music, conversation), evening routine medication reminders, bedtime hygiene (oral care, face washing), changing into nightclothes, bedroom safety path check, and secure settling into bed.
   - ABSOLUTE PROHIBITION: NEVER document morning awakening, morning showers, or breakfast preparation on an evening/night shift.

4. FULL DAY / EXTENDED SHIFTS (e.g. 8:00 AM – 4:00 PM / 8:00 AM – 8:00 PM):
   - Must progress logically across the covered hours (morning activities -> lunch & midday activities -> afternoon pacing/coaching).

------------------------------------------------------------
MULTIPLE DATE GENERATION:
------------------------------------------------------------
For each date: create a separate log, meet the minimum word count, maintain client consistency, maintain service consistency, preserve date-specific facts, vary the narrative, avoid repeating the same phrases or paragraph structure.
Each date must feel like an independently written entry.
No exact clock times unless requested. No place names unless provided.

------------------------------------------------------------
OUTPUT FORMAT:
------------------------------------------------------------
Output ONLY the finished logs separated by "---". For each date include the uppercase date and the shift schedule header:

[DATE IN CAPITAL LETTERS] • [SCHEDULE COVERAGE IN CAPITAL LETTERS]
[Continuous cohesive narrative block meeting minimum word count with no bullet points and no internal line breaks]
---
[DATE IN CAPITAL LETTERS] • [SCHEDULE COVERAGE IN CAPITAL LETTERS]
[Continuous cohesive narrative block meeting minimum word count with no bullet points and no internal line breaks]

Do not include introductions, meta-analysis, writing advice, or AI disclaimers in your output.`;

// ============================================================
// HELPER: SANITIZE API KEY
// ============================================================
function sanitizeApiKey(rawKey) {
  if (!rawKey) return "";
  return rawKey
    .trim()
    .replace(/^(export\s+)?(GEMINI_API_KEY|API_KEY)\s*[:=]\s*/i, "")
    .replace(/^["'`]|["'`]$/g, "")
    .trim();
}

function normalizeModel(model) {
  if (!model) return "gemini-3.6-flash";
  const m = model.trim().toLowerCase();
  if (m.includes("2.0") || m.includes("1.5") || m.includes("gemini-pro") || m.includes("thinking")) {
    return "gemini-3.6-flash";
  }
  return model.trim();
}

// ============================================================
// STATE MANAGEMENT
// ============================================================
let selectedDates = [];
let generatedLogsData = [];
let serverHasBuiltInKey = false;
let activeClientProfile = null;

// ============================================================
// DOM ELEMENTS INITIALIZATION
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initApiKey();
  initClientMemory();
  initServiceScheduleControls();
  initServiceSelectors();
  initDateControls();
  initQuickInserts();
  initFormActions();
  initOutputActions();
  initFormDraftAutoSave();
  initMobileNavigation();
});

// ============================================================
// API KEY & SETTINGS MANAGEMENT
// ============================================================
function initApiKey() {
  const apiKeyInput = document.getElementById("apiKeyInput");
  const modelSelect = document.getElementById("modelSelect");
  const toggleKeyVisibilityBtn = document.getElementById("toggleKeyVisibilityBtn");
  const saveApiKeyBtn = document.getElementById("saveApiKeyBtn");
  const clearApiKeyBtn = document.getElementById("clearApiKeyBtn");
  const testApiKeyBtn = document.getElementById("testApiKeyBtn");
  const apiTestResult = document.getElementById("apiTestResult");
  const toggleSettingsBtn = document.getElementById("toggleSettingsBtn");
  const apiPanel = document.getElementById("apiPanel");
  const apiStatusDot = document.getElementById("apiStatusDot");
  const apiStatusText = document.getElementById("apiStatusText");
  const apiModeBadge = document.getElementById("apiModeBadge");

  // Load from localStorage
  const savedKey = sanitizeApiKey(localStorage.getItem("carelog_gemini_api_key") || "");
  const savedModel = normalizeModel(localStorage.getItem("carelog_gemini_model") || "gemini-3.6-flash");
  localStorage.setItem("carelog_gemini_model", savedModel);

  if (savedKey) {
    apiKeyInput.value = savedKey;
    updateApiStatus(true);
  } else {
    updateApiStatus(false);
  }

  if (modelSelect) {
    modelSelect.value = savedModel;
  }

  // Check server configuration status
  fetch("/api/status")
    .then(r => r.json())
    .then(data => {
      if (data && data.hasBuiltInKey) {
        serverHasBuiltInKey = true;
        if (!savedKey) {
          apiStatusDot.className = "status-dot active";
          apiStatusText.textContent = "AI Studio Key Ready";
          if (apiModeBadge) {
            apiModeBadge.textContent = "Built-in Key Active";
          }
        }
      }
    })
    .catch(() => {
      // Running purely client-side static mode
    });

  // Toggle Settings Panel
  toggleSettingsBtn.addEventListener("click", () => {
    const isOpen = apiPanel.classList.contains("open");
    if (isOpen) {
      apiPanel.classList.remove("open");
    } else {
      apiPanel.classList.add("open");
      apiKeyInput.focus();
    }
  });

  // Toggle Visibility
  toggleKeyVisibilityBtn.addEventListener("click", () => {
    const isPassword = apiKeyInput.type === "password";
    apiKeyInput.type = isPassword ? "text" : "password";
    toggleKeyVisibilityBtn.setAttribute("title", isPassword ? "Hide API key" : "Show API key");
  });

  // Save Key
  saveApiKeyBtn.addEventListener("click", () => {
    const key = sanitizeApiKey(apiKeyInput.value);
    const model = modelSelect.value;

    if (!key && !serverHasBuiltInKey) {
      showToast("Please enter an API key", "error");
      return;
    }

    if (key) {
      localStorage.setItem("carelog_gemini_api_key", key);
      apiKeyInput.value = key;
    }
    localStorage.setItem("carelog_gemini_model", model);
    updateApiStatus(true);
    showToast("API key & model saved to browser!", "success");
    apiPanel.classList.remove("open");
  });

  // Clear Key
  clearApiKeyBtn.addEventListener("click", () => {
    localStorage.removeItem("carelog_gemini_api_key");
    apiKeyInput.value = "";
    if (apiTestResult) {
      apiTestResult.className = "api-test-result";
      apiTestResult.innerHTML = "";
    }
    updateApiStatus(serverHasBuiltInKey);
    showToast("API key cleared", "warning");
  });

  // Test Key Button
  if (testApiKeyBtn) {
    testApiKeyBtn.addEventListener("click", async () => {
      const key = sanitizeApiKey(apiKeyInput.value || localStorage.getItem("carelog_gemini_api_key") || "");
      const model = normalizeModel(modelSelect.value || localStorage.getItem("carelog_gemini_model") || "gemini-3.6-flash");

      if (!key && !serverHasBuiltInKey) {
        showTestResult({
          ok: false,
          title: "Missing API Key",
          message: "Please paste your Google Gemini API key into the input field first.",
          hint: 'Get a free key from Google AI Studio (https://aistudio.google.com/app/apikey). It starts with "AIzaSy...".'
        });
        return;
      }

      testApiKeyBtn.disabled = true;
      testApiKeyBtn.innerHTML = `
        <svg class="spin-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Testing...</span>
      `;

      try {
        // First try server-side test endpoint
        let res = await fetch("/api/test-key", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ apiKey: key, model })
        }).then(r => r.json()).catch(() => null);

        // If server endpoint isn't available, perform direct client-side test
        if (!res) {
          const directEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
          const directResp = await fetch(directEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ role: "user", parts: [{ text: "Respond with OK." }] }]
            })
          });

          if (!directResp.ok) {
            const errData = await directResp.json().catch(() => ({}));
            res = {
              ok: false,
              statusCode: directResp.status,
              message: errData.error?.message || directResp.statusText,
              hint: directResp.status === 400 
                ? 'Google reported the key is invalid. Ensure you copied the entire key without extra characters or quotes.'
                : directResp.status === 429
                ? 'Rate limit reached on Google free tier. Please wait 30 seconds before retrying, or switch to gemini-2.0-flash.'
                : 'Please verify the key in Google AI Studio.'
            };
          } else {
            res = {
              ok: true,
              message: `API Key is active and verified! Connected successfully to ${model}.`
            };
          }
        }

        if (res.ok) {
          showTestResult({
            ok: true,
            title: "Connection Successful",
            message: res.message || `Successfully connected to Google Gemini (${model})!`,
            hint: "You are ready to generate care logs."
          });
          updateApiStatus(true);
        } else {
          showTestResult({
            ok: false,
            title: `Connection Failed (${res.statusCode || 'Error'})`,
            message: res.message || "Failed to authenticate with Google Gemini.",
            hint: res.hint || "Double-check your API key from Google AI Studio."
          });
        }
      } catch (err) {
        showTestResult({
          ok: false,
          title: "Network Connection Issue",
          message: err.message || "Could not contact Gemini servers.",
          hint: "Check your internet connection and ensure adblockers are not blocking generativelanguage.googleapis.com."
        });
      } finally {
        testApiKeyBtn.disabled = false;
        testApiKeyBtn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Test Key</span>
        `;
      }
    });
  }

  function showTestResult({ ok, title, message, hint }) {
    if (!apiTestResult) return;
    apiTestResult.className = `api-test-result open ${ok ? "success" : "error"}`;
    apiTestResult.innerHTML = `
      <div class="api-test-header">
        ${ok ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        `}
        <span>${title}</span>
      </div>
      <div>${message}</div>
      ${hint ? `<div class="api-test-hint">💡 <em>${hint}</em></div>` : ""}
    `;
  }

  function updateApiStatus(hasKey) {
    if (hasKey || serverHasBuiltInKey) {
      apiStatusDot.className = "status-dot active";
      apiStatusText.textContent = hasKey ? "API Key Active" : "AI Studio Key Ready";
    } else {
      apiStatusDot.className = "status-dot missing";
      apiStatusText.textContent = "Set API Key";
    }
  }
}

// ============================================================
// QUICK ACTIVITY INSERTS
// ============================================================
function initQuickInserts() {
  const insertButtons = document.querySelectorAll(".quick-insert-btn");
  const notesInput = document.getElementById("sessionNotesInput");
  if (!notesInput) return;

  insertButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const insertText = btn.getAttribute("data-insert");
      if (!insertText) return;

      const currentVal = notesInput.value.trim();
      if (!currentVal) {
        notesInput.value = insertText;
      } else {
        notesInput.value = currentVal + "\n" + insertText;
      }
      notesInput.focus();

      // Tactile button feedback
      btn.classList.add("tapped-feedback");
      setTimeout(() => btn.classList.remove("tapped-feedback"), 350);

      saveFormDraft();
      const label = btn.textContent.replace(/^\+\s*/, "").trim();
      showToast(`Added "${label}" to notes`, "success");
    });
  });
}

// ============================================================
// CLIENT MEMORY MANAGEMENT & PERSISTENCE
// ============================================================
// No pre-loaded demo clients; caregiver starts fresh with their own client roster
const DEFAULT_CLIENT_PROFILES = [];

function cleanupDemoClients() {
  try {
    const rawMem = localStorage.getItem("carelog_client_memories_v1");
    if (rawMem) {
      const parsed = JSON.parse(rawMem);
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter(p => {
          const nameLower = (p.name || "").trim().toLowerCase();
          const idLower = (p.id || "").toLowerCase();
          return !["jeremy_davis", "eleanor_vance", "marcus_reed"].includes(idLower) &&
                 !["jeremy davis", "eleanor vance", "marcus reed"].includes(nameLower);
        });
        localStorage.setItem("carelog_client_memories_v1", JSON.stringify(filtered));
      }
    }
    const rawDraft = localStorage.getItem("carelog_active_draft");
    if (rawDraft) {
      const draft = JSON.parse(rawDraft);
      const draftName = (draft?.clientName || "").trim().toLowerCase();
      if (["jeremy davis", "eleanor vance", "marcus reed"].includes(draftName)) {
        draft.clientName = "";
        draft.background = "";
        draft.routine = "";
        draft.notes = "";
        draft.instructions = "";
        localStorage.setItem("carelog_active_draft", JSON.stringify(draft));
      }
    }
  } catch (e) {
    // ignore
  }
}

function getClientMemories() {
  try {
    const raw = localStorage.getItem("carelog_client_memories_v1");
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveClientMemoryProfile(profile) {
  const list = getClientMemories();
  const existingIdx = list.findIndex(p => p.id === profile.id || p.name.trim().toLowerCase() === profile.name.trim().toLowerCase());
  
  if (existingIdx >= 0) {
    list[existingIdx] = { ...list[existingIdx], ...profile };
  } else {
    list.unshift(profile);
  }

  localStorage.setItem("carelog_client_memories_v1", JSON.stringify(list));
  return list;
}

function deleteClientMemoryProfile(profileId) {
  let list = getClientMemories();
  list = list.filter(p => p.id !== profileId);
  localStorage.setItem("carelog_client_memories_v1", JSON.stringify(list));
  return list;
}

function initClientMemory() {
  cleanupDemoClients();

  const changeClientBtn = document.getElementById("changeClientBtn");
  const saveClientMemoryBtn = document.getElementById("saveClientMemoryBtn");
  const modal = document.getElementById("clientMemoryModal");
  const closeModalBtn = document.getElementById("closeClientModalBtn");
  const cancelModalBtn = document.getElementById("cancelClientModalBtn");
  const saveNewClientModalBtn = document.getElementById("saveNewClientModalBtn");

  // Load active client name display
  const clientNameInput = document.getElementById("clientNameInput");
  const activeName = clientNameInput ? clientNameInput.value.trim() : "";
  updateActiveClientBadge(activeName);

  if (changeClientBtn) {
    changeClientBtn.addEventListener("click", () => {
      renderClientModalList();
      modal.classList.remove("hidden");
    });
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", () => modal.classList.add("hidden"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Save current details from the page into client memory
  if (saveClientMemoryBtn) {
    saveClientMemoryBtn.addEventListener("click", () => {
      const currentName = document.getElementById("clientNameInput").value.trim();
      if (!currentName) {
        showToast("Please enter a Client Name before saving to memory", "error");
        document.getElementById("clientNameInput").focus();
        return;
      }

      const background = document.getElementById("clientBackgroundInput").value.trim();
      const routine = document.getElementById("clientRoutineInput").value.trim();
      const schedule = document.getElementById("shiftScheduleInput").value.trim();
      const serviceType = getSelectedServiceType();

      const profile = {
        id: "client_" + Date.now(),
        name: currentName,
        serviceType,
        schedule: schedule || "8:00 AM – 12:00 PM (4 Hours - Morning)",
        background,
        routine,
        updatedAt: new Date().toISOString()
      };

      saveClientMemoryProfile(profile);
      updateActiveClientBadge(currentName);
      saveFormDraft();
      showToast(`Saved memory for "${currentName}" (Routine, Background, Schedule)`, "success");
    });
  }

  // In-modal "+ Add New Client" form submission (no popup prompts)
  if (saveNewClientModalBtn) {
    saveNewClientModalBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("newModalClientName");
      const name = nameInput ? nameInput.value.trim() : "";
      if (!name) {
        showToast("Please enter the client's full name", "error");
        if (nameInput) nameInput.focus();
        return;
      }

      const serviceType = document.getElementById("newModalClientService")?.value || "Personal Support";
      const schedule = document.getElementById("newModalClientSchedule")?.value || "8:00 AM – 12:00 PM (4 Hours - Morning)";
      const background = document.getElementById("newModalClientBackground")?.value || "";
      const routine = document.getElementById("newModalClientRoutine")?.value || "";

      const newProfile = {
        id: "client_" + Date.now(),
        name,
        serviceType,
        schedule,
        background,
        routine,
        updatedAt: new Date().toISOString()
      };

      saveClientMemoryProfile(newProfile);
      applyClientProfileToForm(newProfile);

      // Reset modal fields
      if (nameInput) nameInput.value = "";
      if (document.getElementById("newModalClientBackground")) document.getElementById("newModalClientBackground").value = "";
      if (document.getElementById("newModalClientRoutine")) document.getElementById("newModalClientRoutine").value = "";

      modal.classList.add("hidden");
      showToast(`Added and selected client: ${newProfile.name}`, "success");
    });
  }
}

function updateActiveClientBadge(name) {
  const display = document.getElementById("activeClientNameDisplay");
  if (display) {
    display.textContent = name || "No Client Selected";
  }
  const mobileDisplay = document.getElementById("mobileStickyClientText");
  if (mobileDisplay) {
    mobileDisplay.textContent = name || "Select Client";
  }
}

function renderClientModalList() {
  const container = document.getElementById("savedClientsList");
  const countLabel = document.getElementById("savedClientsCountLabel");
  if (!container) return;

  const profiles = getClientMemories();
  if (countLabel) {
    countLabel.textContent = `${profiles.length} Saved`;
  }

  const currentClientName = (document.getElementById("clientNameInput").value || "").trim().toLowerCase();

  container.innerHTML = "";

  if (profiles.length === 0) {
    container.innerHTML = `
      <div class="empty-clients-state">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
        <span>No saved client profiles yet.</span>
        <span style="font-size:0.75rem;">Fill out the form above to add your first client profile.</span>
      </div>
    `;
    return;
  }

  profiles.forEach(profile => {
    const isCurrent = currentClientName && profile.name.trim().toLowerCase() === currentClientName;
    const card = document.createElement("div");
    card.className = `client-item-card ${isCurrent ? "active-client-item" : ""}`;

    card.innerHTML = `
      <div class="client-item-main">
        <div class="client-item-name">
          <span>${escapeHtml(profile.name)}</span>
          <span class="client-item-tag">${escapeHtml(profile.serviceType || "Care Service")}</span>
          ${isCurrent ? '<span style="font-size:0.7rem; background:#dcfce7; color:#15803d; font-weight:700; padding:2px 8px; border-radius:999px;">Active</span>' : ''}
        </div>
        <div class="client-item-meta">
          <span>Schedule: ${escapeHtml(profile.schedule || "Not specified")}</span>
          <span>•</span>
          <span>${profile.routine ? "Routine Saved ✓" : "No Routine"}</span>
          <span>•</span>
          <span>${profile.background ? "Background Saved ✓" : "No Background"}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:0.4rem;">
        <button type="button" class="btn btn-secondary btn-sm select-client-btn" style="${isCurrent ? 'border-color:var(--primary); color:var(--primary); font-weight:700;' : ''}">
          ${isCurrent ? "Selected" : "Switch To Client"}
        </button>
        <button type="button" class="btn-chip delete-client-btn" title="Delete this profile" style="color:var(--danger); border-color:var(--danger-border); padding:4px 8px;">
          ✕
        </button>
      </div>
    `;

    card.querySelector(".select-client-btn").addEventListener("click", () => {
      applyClientProfileToForm(profile);
      document.getElementById("clientMemoryModal").classList.add("hidden");
    });

    const delBtn = card.querySelector(".delete-client-btn");
    if (delBtn) {
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm(`Delete saved profile for ${profile.name}?`)) {
          deleteClientMemoryProfile(profile.id);
          renderClientModalList();
          showToast(`Deleted profile for ${profile.name}`, "warning");
        }
      });
    }

    container.appendChild(card);
  });
}

function applyClientProfileToForm(profile) {
  // Update inputs
  document.getElementById("clientNameInput").value = profile.name;
  updateActiveClientBadge(profile.name);

  if (profile.background !== undefined) {
    document.getElementById("clientBackgroundInput").value = profile.background;
  }
  if (profile.routine !== undefined) {
    document.getElementById("clientRoutineInput").value = profile.routine;
  }
  if (profile.schedule) {
    setShiftSchedule(profile.schedule);
  }

  // Update Service Type radio if present
  if (profile.serviceType) {
    selectServiceTypeRadio(profile.serviceType);
  }

  // CRITICAL CONSTRAINT: DO NOT WIPE SESSION NOTES! The caregiver keeps their notes intact!
  saveFormDraft();
  showToast(`Switched active client to "${profile.name}". Background, Routine & Schedule loaded from memory.`, "success");
}

function selectServiceTypeRadio(serviceType) {
  const radios = document.querySelectorAll('input[name="serviceType"]');
  radios.forEach(r => {
    if (r.value.toLowerCase() === serviceType.toLowerCase() || (serviceType.includes("Personal") && r.value.includes("Personal"))) {
      r.checked = true;
      document.querySelectorAll(".service-card").forEach(c => c.classList.remove("selected"));
      const card = r.closest(".service-card");
      if (card) card.classList.add("selected");
    }
  });
}

// ============================================================
// SERVICE LOGS SCHEDULE / SHIFT TIME COVERAGE CONTROLS
// ============================================================
function initServiceScheduleControls() {
  const scheduleInput = document.getElementById("shiftScheduleInput");
  const presetButtons = document.querySelectorAll(".shift-preset-btn");
  const guideDesc = document.getElementById("shiftTimeRuleDesc");

  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      presetButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const sched = btn.getAttribute("data-schedule");
      if (sched && scheduleInput) {
        scheduleInput.value = sched;
        updateShiftGuideDescription(sched);
        saveFormDraft();
      }
    });
  });

  if (scheduleInput) {
    scheduleInput.addEventListener("input", () => {
      updateShiftGuideDescription(scheduleInput.value);
      saveFormDraft();
    });
  }
}

function setShiftSchedule(scheduleStr) {
  const scheduleInput = document.getElementById("shiftScheduleInput");
  if (!scheduleInput) return;
  scheduleInput.value = scheduleStr;

  // Sync preset active button if matches
  const presetButtons = document.querySelectorAll(".shift-preset-btn");
  presetButtons.forEach(btn => {
    if (btn.getAttribute("data-schedule") === scheduleStr) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  updateShiftGuideDescription(scheduleStr);
}

function updateShiftGuideDescription(scheduleStr) {
  const descEl = document.getElementById("shiftTimeRuleDesc");
  if (!descEl) return;

  const s = scheduleStr.toLowerCase();
  if (s.includes("morning") || (s.includes("am") && !s.includes("pm"))) {
    descEl.textContent = "Morning shifts focus strictly on awakening presentation, morning warm shower/hygiene, grooming, dressing, seated breakfast, and morning walking/PT. Evening activities (such as dinner or tucking into bed) will never be placed on a morning shift.";
  } else if (s.includes("afternoon")) {
    descEl.textContent = "Afternoon shifts focus strictly on lunch preparation & dining setup, midday hydration, indoor/outdoor activities, puzzles, patio walks, and afternoon pacing. Morning wake-up showers or bedtime tucking into bed will never be placed on an afternoon shift.";
  } else if (s.includes("evening") || s.includes("night") || s.includes("bedtime")) {
    descEl.textContent = "Evening/Night shifts focus strictly on dinner preparation and dining assistance, evening hydration, leisure, evening meds, bedtime oral care, changing into nightclothes, bedroom safety, and settling into bed. Breakfast or morning wake-up will never be included.";
  } else if (s.includes("full day")) {
    descEl.textContent = "Full day coverage progresses logically from morning hygiene and breakfast through lunch, afternoon engagement, and early evening preparation.";
  } else {
    descEl.textContent = `All activities will be strictly verified to align with ${scheduleStr}. Off-hour activities are prohibited to ensure Medicaid compliance.`;
  }
}

// ============================================================
// SERVICE TYPE SELECTION (TYPE OF LOGS TO GENERATE)
// ============================================================
function initServiceSelectors() {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      serviceCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      // DONT CHANGE DETAILS IN INPUT TABLES! Just save draft and show badge
      saveFormDraft();
    });
  });
}

function getSelectedServiceType() {
  const checked = document.querySelector('input[name="serviceType"]:checked');
  return checked ? checked.value : "Personal Support";
}

function getServiceWordRequirement(serviceType) {
  if (serviceType.includes("Personal Support")) return 400;
  return 300; // Companion and SLC
}

// ============================================================
// ENHANCED DATE SELECTION MANAGEMENT (EASY BATCH CHOOSER)
// ============================================================
function initDateControls() {
  const dateInput = document.getElementById("datePickerInput");
  const addDateBtn = document.getElementById("addDateBtn");
  const quickTodayBtn = document.getElementById("quickTodayBtn");
  const quickYesterdayBtn = document.getElementById("quickYesterdayBtn");
  const quickPast3DaysBtn = document.getElementById("quickPast3DaysBtn");
  const quickThisWeekBtn = document.getElementById("quickThisWeekBtn");
  const quickPast7DaysBtn = document.getElementById("quickPast7DaysBtn");
  const clearDatesBtn = document.getElementById("clearDatesBtn");

  // Set default date picker to today
  const today = new Date();
  dateInput.value = today.toISOString().split("T")[0];

  addDateBtn.addEventListener("click", () => {
    const rawVal = dateInput.value;
    if (rawVal) {
      addDate(formatDateString(rawVal));
    }
  });

  if (quickTodayBtn) {
    quickTodayBtn.addEventListener("click", () => {
      addDate(formatDateString(new Date()));
    });
  }

  if (quickYesterdayBtn) {
    quickYesterdayBtn.addEventListener("click", () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      addDate(formatDateString(d));
    });
  }

  if (quickPast3DaysBtn) {
    quickPast3DaysBtn.addEventListener("click", () => {
      for (let i = 0; i < 3; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        addDate(formatDateString(d));
      }
      showToast("Added past 3 days", "info");
    });
  }

  if (quickThisWeekBtn) {
    quickThisWeekBtn.addEventListener("click", () => {
      const today = new Date();
      const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday...
      const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      
      const monday = new Date(today);
      monday.setDate(today.getDate() + mondayOffset);

      for (let i = 0; i < 5; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        addDate(formatDateString(d));
      }
      showToast("Added Mon – Fri (This Week)", "info");
    });
  }

  if (quickPast7DaysBtn) {
    quickPast7DaysBtn.addEventListener("click", () => {
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        addDate(formatDateString(d));
      }
      showToast("Added past 7 days", "info");
    });
  }

  if (clearDatesBtn) {
    clearDatesBtn.addEventListener("click", () => {
      selectedDates = [];
      renderDateChips();
      saveFormDraft();
      showToast("Cleared selected dates", "warning");
    });
  }

  // Default initial date: today
  if (selectedDates.length === 0) {
    addDate(formatDateString(new Date()));
  }
}

function formatDateString(val) {
  if (typeof val === "string" && val.includes("-")) {
    const parts = val.split("-");
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${months[monthIdx]} ${day}, ${year}`;
    }
  }
  const d = (val instanceof Date) ? val : new Date(val);
  if (isNaN(d.getTime())) return val;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function addDate(dateStr) {
  if (!dateStr || selectedDates.includes(dateStr)) return;
  selectedDates.push(dateStr);
  renderDateChips();
  saveFormDraft();
}

function removeDate(dateStr) {
  selectedDates = selectedDates.filter(d => d !== dateStr);
  renderDateChips();
  saveFormDraft();
}

function renderDateChips() {
  const container = document.getElementById("dateChipsContainer");
  const countTag = document.getElementById("dateCountTag");

  if (countTag) {
    const count = selectedDates.length;
    countTag.textContent = count === 1 ? "1 Date Selected" : `${count} Dates Selected`;
  }

  container.innerHTML = "";

  if (selectedDates.length === 0) {
    container.innerHTML = `<span style="font-size: 0.8rem; color: #94a3b8;">No dates selected. Pick a date above or use quick shortcuts like "+ Past 3 Days".</span>`;
    return;
  }

  selectedDates.forEach(date => {
    const chip = document.createElement("div");
    chip.className = "date-chip";
    chip.innerHTML = `
      <span>${escapeHtml(date)}</span>
      <button type="button" aria-label="Remove date" title="Remove date">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    chip.querySelector("button").addEventListener("click", () => removeDate(date));
    container.appendChild(chip);
  });
}

// ============================================================
// DRAFT AUTO-SAVE & RECOVERY (PROTECTS TABLE INPUTS FROM BEING LOST)
// ============================================================
function initFormDraftAutoSave() {
  const inputs = [
    "clientNameInput",
    "shiftScheduleInput",
    "clientBackgroundInput",
    "clientRoutineInput",
    "sessionNotesInput",
    "specificInstructionsInput",
    "sampleLogsInput"
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", debounce(saveFormDraft, 400));
    }
  });

  // Check if draft exists and restore on startup
  restoreFormDraft();
}

function saveFormDraft() {
  try {
    const draft = {
      clientName: document.getElementById("clientNameInput")?.value || "",
      serviceType: getSelectedServiceType(),
      schedule: document.getElementById("shiftScheduleInput")?.value || "",
      dates: selectedDates,
      background: document.getElementById("clientBackgroundInput")?.value || "",
      routine: document.getElementById("clientRoutineInput")?.value || "",
      notes: document.getElementById("sessionNotesInput")?.value || "",
      instructions: document.getElementById("specificInstructionsInput")?.value || "",
      sampleLogs: document.getElementById("sampleLogsInput")?.value || ""
    };
    localStorage.setItem("carelog_active_draft", JSON.stringify(draft));
  } catch (e) {
    // ignore
  }
}

function restoreFormDraft() {
  try {
    const raw = localStorage.getItem("carelog_active_draft");
    if (!raw) return;
    const draft = JSON.parse(raw);
    if (!draft) return;

    if (draft.clientName) {
      document.getElementById("clientNameInput").value = draft.clientName;
      updateActiveClientBadge(draft.clientName);
    }
    if (draft.serviceType) {
      selectServiceTypeRadio(draft.serviceType);
    }
    if (draft.schedule) {
      setShiftSchedule(draft.schedule);
    }
    if (Array.isArray(draft.dates) && draft.dates.length > 0) {
      selectedDates = draft.dates;
      renderDateChips();
    }
    if (draft.background !== undefined) {
      document.getElementById("clientBackgroundInput").value = draft.background;
    }
    if (draft.routine !== undefined) {
      document.getElementById("clientRoutineInput").value = draft.routine;
    }
    if (draft.notes !== undefined) {
      document.getElementById("sessionNotesInput").value = draft.notes;
    }
    if (draft.instructions !== undefined) {
      document.getElementById("specificInstructionsInput").value = draft.instructions;
    }
    if (draft.sampleLogs !== undefined) {
      document.getElementById("sampleLogsInput").value = draft.sampleLogs;
    }
  } catch (e) {
    // ignore
  }
}

function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

// ============================================================
// FORM SUBMISSION & GENERATION
// ============================================================
function initFormActions() {
  const generateBtn = document.getElementById("generateLogsBtn");
  const resetBtn = document.getElementById("resetFormBtn");
  const toggleStyleAccordion = document.getElementById("toggleStyleAccordion");
  const styleAccordionBody = document.getElementById("styleAccordionBody");

  if (toggleStyleAccordion && styleAccordionBody) {
    toggleStyleAccordion.addEventListener("click", () => {
      styleAccordionBody.classList.toggle("open");
    });
  }

  resetBtn.addEventListener("click", () => {
    if (confirm("Reset current notes and dates to blank? (Client Memory profiles remain safely saved)")) {
      document.getElementById("sessionNotesInput").value = "";
      document.getElementById("specificInstructionsInput").value = "";
      document.getElementById("sampleLogsInput").value = "";
      selectedDates = [];
      renderDateChips();
      saveFormDraft();
      showToast("Session notes and dates reset", "warning");
    }
  });

  generateBtn.addEventListener("click", handleGenerateCareLogs);
}

async function handleGenerateCareLogs() {
  const rawKey = localStorage.getItem("carelog_gemini_api_key") || document.getElementById("apiKeyInput").value;
  const apiKey = sanitizeApiKey(rawKey);
  const model = normalizeModel(localStorage.getItem("carelog_gemini_model") || document.getElementById("modelSelect").value || "gemini-3.6-flash");

  // Validate API Key or Built-in Key
  if (!apiKey && !serverHasBuiltInKey) {
    document.getElementById("apiPanel").classList.add("open");
    showToast("Please enter your free Gemini API key in the settings panel above", "error");
    document.getElementById("apiKeyInput").focus();
    return;
  }

  // Validate Required Fields
  const clientName = document.getElementById("clientNameInput").value.trim();
  const serviceType = getSelectedServiceType();
  const shiftSchedule = document.getElementById("shiftScheduleInput").value.trim() || "8:00 AM – 12:00 PM (Morning)";
  const sessionNotes = document.getElementById("sessionNotesInput").value.trim();

  if (!clientName) {
    showToast("Client Name is required", "error");
    document.getElementById("clientNameInput").focus();
    return;
  }

  if (selectedDates.length === 0) {
    showToast("Please select at least one date for the log", "error");
    document.getElementById("datePickerInput").focus();
    return;
  }

  if (!sessionNotes) {
    showToast("Real Session Notes are required", "error");
    document.getElementById("sessionNotesInput").focus();
    return;
  }

  const clientBackground = document.getElementById("clientBackgroundInput").value.trim();
  const clientRoutine = document.getElementById("clientRoutineInput").value.trim();
  const specificInstructions = document.getElementById("specificInstructionsInput").value.trim();
  const sampleLogs = document.getElementById("sampleLogsInput").value.trim();
  const requiredMinWords = getServiceWordRequirement(serviceType);

  // Construct structured User Prompt with explicit Brief Notes handling instructions & strict time coverage
  const userPrompt = `Generate Medicaid-compliant care logs for the following client documentation session:

CLIENT NAME: ${clientName}
SERVICE TYPE: ${serviceType} (MANDATORY STRICT MINIMUM: ${requiredMinWords} WORDS PER DATE)
SERVICE LOGS SCHEDULE / SHIFT TIME COVERAGE: ${shiftSchedule}
LOG DATES REQUIRED: ${selectedDates.join(", ")}

MANDATORY TIME COVERAGE ALIGNMENT PROTOCOL:
You MUST verify and ensure every documented activity is strictly appropriate to this schedule:
- Scheduled Shift: ${shiftSchedule}
- If Morning: Only document morning awakening, morning hygiene/shower, grooming, dressing, breakfast prep & dining, morning meds, and morning ambulation/PT. Strictly forbid dinner, bedtime routine, or night settling!
- If Afternoon: Only document lunch assistance, midday hydration, afternoon activities/walking/outings, cognitive puzzles, and afternoon rest/pacing. Strictly forbid morning showers or bedtime routines!
- If Evening / Night: Only document dinner preparation/assistance, evening hydration, leisure, bedtime hygiene (brushing teeth/changing clothes), and settling into bed. Strictly forbid breakfast or morning wake-up!
- If Full Day: Spans whole day logically.

CLIENT BACKGROUND (FROM CLIENT MEMORY):
${clientBackground || "None provided"}

CLIENT RECURRING ROUTINES (FROM CLIENT MEMORY):
${clientRoutine || "None provided"}

REAL SESSION NOTES (PRIMARY FACTUAL SOURCE - BRIEF SHORTHAND & BULLETS EXPECTED):
${sessionNotes}

SPECIFIC INSTRUCTIONS:
${specificInstructions || "None provided"}

SAMPLE LOGS / CAREGIVER STYLE REFERENCE:
${sampleLogs || "None provided"}

EXPANSION PROTOCOL FOR BRIEF CAREGIVER NOTES:
The caregiver has supplied brief shift notes / shorthand bullet points. This is standard caregiving practice.
Do NOT output abbreviated summaries, do NOT complain that notes are brief, and do NOT demand more notes.
You MUST apply the "MANDATORY PROTOCOL WHEN BRIEF / SHORTHAND NOTES ARE PROVIDED" to expand these brief notations into a full, detailed, cohesive narrative meeting the mandatory minimum word count:
- Personal Support: at least 400 words per date log.
- Companion Care: at least 300 words per date log.
- Supported Living Coaching: at least 300 words per date log.
Elaborate on hands-on supportive technique, steadying assistance, verbal prompts, client cooperation, safety checks, hydration, and pacing without fabricating unmentioned medications or specific unmentioned foods.

REMINDERS:
- Each date must have its own uppercase header formatted as: [DATE IN CAPITAL LETTERS] • [SCHEDULE COVERAGE IN CAPITAL LETTERS]
- Narrative must be ONE SINGLE COHESIVE BLOCK OF TEXT with no internal line breaks, no bullet points, and no lists.
- Strict minimum word count: at least ${requiredMinWords} words for each date log.
- First person "I" perspective.
- No arrival/departure phrases ("I arrived", "Upon arrival", "I left").
- Begin directly with the client's condition, mood, or presentation.
- Do not specify food items unless explicitly mentioned in the notes.
- Follow all anti-repetition rules. Separate multiple dates with "---".`;

  // Update UI to Loading State
  setLoadingState(true);
  startRotatingLoadingMessages(serviceType, selectedDates.length);

  try {
    let generatedRawText = null;

    // Strategy 1: Call full-stack server proxy endpoint
    try {
      const serverRes = await fetch("/api/generate-care-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey,
          model,
          prompt: userPrompt,
          systemInstruction: CARELOG_MASTER_SYSTEM_INSTRUCTION
        })
      });

      if (serverRes.ok) {
        const serverData = await serverRes.json();
        if (serverData.ok && serverData.text) {
          generatedRawText = serverData.text;
        }
      } else {
        const errJson = await serverRes.json().catch(() => ({}));
        if (errJson.error && (errJson.error.includes("Authentication") || errJson.error.includes("Rate limit"))) {
          throw new Error(errJson.error);
        }
      }
    } catch (serverErr) {
      if (serverErr.message && (serverErr.message.includes("Authentication") || serverErr.message.includes("Rate limit"))) {
        throw serverErr;
      }
      // Server proxy unavailable, fallback to client-side direct fetch
    }

    // Strategy 2: Direct browser client-side fetch (with model fallback and systemInstruction fallback)
    if (!generatedRawText && apiKey) {
      const modelsToTry = Array.from(new Set([model, "gemini-3.6-flash", "gemini-3.8-flash", "gemini-2.5-flash", "gemini-flash-latest"]));
      let lastClientError = null;

      for (const tryModel of modelsToTry) {
        try {
          const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${tryModel}:generateContent?key=${apiKey}`;

          let response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: CARELOG_MASTER_SYSTEM_INSTRUCTION }]
              },
              contents: [{ role: "user", parts: [{ text: userPrompt }] }],
              generationConfig: { temperature: 0.65, topP: 0.95 }
            })
          });

          // If 400 error (systemInstruction unsupported in some API key tiers), combine prompt
          if (response.status === 400) {
            const combinedPrompt = `[CARELOG VA MASTER SYSTEM INSTRUCTION]\n${CARELOG_MASTER_SYSTEM_INSTRUCTION}\n\n[USER REQUEST]\n${userPrompt}`;
            response = await fetch(endpoint, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: combinedPrompt }] }],
                generationConfig: { temperature: 0.65, topP: 0.95 }
              })
            });
          }

          if (response.ok) {
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              generatedRawText = text;
              break;
            }
          } else {
            const errData = await response.json().catch(() => ({}));
            const errMsg = errData.error?.message || response.statusText;
            lastClientError = new Error(`Gemini API error (${response.status}): ${errMsg}`);
            if (response.status === 429) {
              throw new Error(`Google Free Tier Rate Limit reached (429). Please wait 20-30 seconds before retrying.`);
            }
            if (response.status === 400 || response.status === 403) {
              throw new Error(`API Key Authentication Error (${response.status}): ${errMsg}. Please test your key in Settings.`);
            }
          }
        } catch (e) {
          lastClientError = e;
          if (e.message && (e.message.includes("Rate Limit") || e.message.includes("Authentication Error"))) {
            throw e;
          }
        }
      }

      if (!generatedRawText && lastClientError) {
        throw lastClientError;
      }
    }

    if (!generatedRawText) {
      throw new Error("Could not generate text with the provided API key. Please click 'Test Key' in Settings to verify your connection.");
    }

    // Process and Display Results
    displayGeneratedLogs({
      rawText: generatedRawText,
      clientName,
      serviceType,
      shiftSchedule,
      dates: selectedDates,
      minWords: requiredMinWords
    });

    showToast("Care logs generated successfully!", "success");

  } catch (error) {
    console.error("Generation error:", error);
    showToast(error.message, "error");
    // Leave previous state or reset
    setLoadingState(false);
  } finally {
    stopRotatingLoadingMessages();
  }
}

// ============================================================
// UI STATE TRANSITIONS & LOADING SPINNER
// ============================================================
let loadingMsgInterval = null;

function setLoadingState(isLoading) {
  const emptyState = document.getElementById("emptyOutputState");
  const loadingState = document.getElementById("loadingOutputState");
  const resultsState = document.getElementById("resultsOutputState");
  const generateBtn = document.getElementById("generateLogsBtn");
  const mobileGenerateBtn = document.getElementById("mobileStickyGenerateBtn");
  const mobileBtnText = document.getElementById("mobileStickyBtnText");

  if (isLoading) {
    emptyState.style.display = "none";
    resultsState.style.display = "none";
    loadingState.style.display = "flex";
    generateBtn.disabled = true;
    generateBtn.innerHTML = `
      <div class="spinner" style="width: 18px; height: 18px; border-width: 2px; margin: 0; display: inline-block;"></div>
      <span>Generating Care Logs...</span>
    `;

    if (mobileGenerateBtn) {
      mobileGenerateBtn.disabled = true;
      if (mobileBtnText) mobileBtnText.textContent = "Generating...";
    }

    if (window.innerWidth <= 900) {
      setMobileView("output");
    }
  } else {
    loadingState.style.display = "none";
    generateBtn.disabled = false;
    generateBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
      <span>Generate Professional Care Log(s)</span>
    `;

    if (mobileGenerateBtn) {
      mobileGenerateBtn.disabled = false;
      if (mobileBtnText) mobileBtnText.textContent = "Generate Logs";
    }
  }
}

function startRotatingLoadingMessages(serviceType, dateCount) {
  const stepMsgEl = document.getElementById("loadingStepMsg");
  const messages = [
    `Analyzing session notes for ${dateCount} date${dateCount > 1 ? "s" : ""}...`,
    `Applying ${serviceType} documentation standards...`,
    "Constructing continuous cohesive narrative flow...",
    "Applying strict anti-repetition rules...",
    "Verifying removal of arrival/departure clichés...",
    "Silently checking strict minimum word counts...",
    "Polishing professional human caregiver voice..."
  ];

  let idx = 0;
  stepMsgEl.textContent = messages[0];
  loadingMsgInterval = setInterval(() => {
    idx = (idx + 1) % messages.length;
    stepMsgEl.textContent = messages[idx];
  }, 2400);
}

function stopRotatingLoadingMessages() {
  if (loadingMsgInterval) {
    clearInterval(loadingMsgInterval);
    loadingMsgInterval = null;
  }
}

// ============================================================
// OUTPUT PARSING & DISPLAY
// ============================================================
function displayGeneratedLogs({ rawText, clientName, serviceType, shiftSchedule, dates, minWords }) {
  setLoadingState(false);
  const resultsState = document.getElementById("resultsOutputState");
  const emptyState = document.getElementById("emptyOutputState");
  emptyState.style.display = "none";
  resultsState.style.display = "flex";

  // Parse logs into structured entries
  // The system outputs logs separated by '---' or date headers
  const parsedEntries = parseRawLogs(rawText, dates);
  generatedLogsData = parsedEntries;

  // Compute total words
  const totalWords = parsedEntries.reduce((sum, item) => sum + item.wordCount, 0);

  // Update header stats
  document.getElementById("outputClientName").textContent = clientName;
  document.getElementById("outputServiceType").textContent = serviceType;
  
  const schedPill = document.getElementById("outputScheduleCoverage");
  if (schedPill && shiftSchedule) {
    schedPill.textContent = shiftSchedule;
    schedPill.style.display = "inline-flex";
  }

  document.getElementById("outputDateCount").textContent = `${parsedEntries.length} Date${parsedEntries.length > 1 ? "s" : ""}`;
  document.getElementById("outputTotalWords").textContent = `${totalWords} Words Total`;

  // Render log cards
  const container = document.getElementById("generatedLogsContainer");
  container.innerHTML = "";

  parsedEntries.forEach((entry, index) => {
    const card = document.createElement("div");
    card.className = "log-entry-card";

    const meetsWordCount = entry.wordCount >= minWords;
    const wordStatusClass = meetsWordCount ? "meets" : "below";
    const wordStatusText = meetsWordCount 
      ? `✓ ${entry.wordCount} words (Meets ${minWords}+ min)` 
      : `⚠️ ${entry.wordCount} words (Under ${minWords} min)`;

    // If dateHeader does not have schedule, show schedule coverage tag
    const headerDisplay = entry.dateHeader.includes("•") || !shiftSchedule
      ? entry.dateHeader
      : `${entry.dateHeader} • ${shiftSchedule.toUpperCase()}`;

    card.innerHTML = `
      <div class="log-entry-header">
        <div class="log-date-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${escapeHtml(headerDisplay)}</span>
        </div>
        <div class="log-meta-right">
          <span class="word-count-badge ${wordStatusClass}">
            ${wordStatusText}
          </span>
          <button type="button" class="btn btn-secondary btn-sm copy-single-btn" data-index="${index}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy Log</span>
          </button>
        </div>
      </div>
      <div class="log-narrative-text" id="logText-${index}">${escapeHtml(entry.narrative)}</div>
    `;

    // Single copy button listener
    const copyBtn = card.querySelector(".copy-single-btn");
    copyBtn.addEventListener("click", () => {
      const fullText = `${entry.dateHeader}\n${entry.narrative}`;
      copyToClipboard(fullText, copyBtn);
    });

    container.appendChild(card);
  });

  // Scroll smoothly to output on mobile/tablet
  if (window.innerWidth <= 900) {
    setMobileView("output");
  }
  const mobileTabBadge = document.getElementById("mobileTabBadge");
  if (mobileTabBadge) {
    mobileTabBadge.textContent = `${totalWords}w`;
  }
  resultsState.scrollIntoView({ behavior: "smooth" });
}

function parseRawLogs(rawText, dates) {
  const cleanText = rawText.trim();
  const entries = [];

  // Split by '---' if model used standard separator
  if (cleanText.includes("---")) {
    const rawChunks = cleanText.split(/---+/).map(c => c.trim()).filter(Boolean);
    rawChunks.forEach((chunk, i) => {
      const parsed = extractDateAndNarrative(chunk, dates[i] || `DATE ${i + 1}`);
      entries.push(parsed);
    });
    return entries;
  }

  // Fallback: check if text has multiple date lines (e.g. AUGUST 1, 2026)
  const lines = cleanText.split("\n").map(l => l.trim()).filter(Boolean);
  let currentDate = dates[0] ? dates[0].toUpperCase() : "CARE LOG";
  let currentNarrativeLines = [];

  for (const line of lines) {
    const isDateHeader = dates.some(d => line.toUpperCase().includes(d.toUpperCase())) ||
      /^(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)\s+\d{1,2},?\s+\d{4}/i.test(line);

    if (isDateHeader && currentNarrativeLines.length > 0) {
      const narrative = currentNarrativeLines.join(" ");
      entries.push({
        dateHeader: currentDate,
        narrative: narrative,
        wordCount: countWords(narrative)
      });
      currentDate = line;
      currentNarrativeLines = [];
    } else if (isDateHeader) {
      currentDate = line;
    } else {
      currentNarrativeLines.push(line);
    }
  }

  if (currentNarrativeLines.length > 0) {
    const narrative = currentNarrativeLines.join(" ");
    entries.push({
      dateHeader: currentDate,
      narrative: narrative,
      wordCount: countWords(narrative)
    });
  }

  return entries.length > 0 ? entries : [{
    dateHeader: dates[0] ? dates[0].toUpperCase() : "CARE LOG",
    narrative: cleanText,
    wordCount: countWords(cleanText)
  }];
}

function extractDateAndNarrative(chunk, fallbackDate) {
  const lines = chunk.split("\n").map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) {
    return { dateHeader: fallbackDate.toUpperCase(), narrative: "", wordCount: 0 };
  }

  const firstLine = lines[0];
  const isDate = /^(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|\d{1,2}\/\d{1,2})/i.test(firstLine) ||
    firstLine.toUpperCase().includes("202") ||
    firstLine.length < 40;

  if (isDate && lines.length > 1) {
    const narrative = lines.slice(1).join(" ");
    return {
      dateHeader: firstLine.toUpperCase(),
      narrative: narrative,
      wordCount: countWords(narrative)
    };
  } else {
    const narrative = lines.join(" ");
    return {
      dateHeader: fallbackDate.toUpperCase(),
      narrative: narrative,
      wordCount: countWords(narrative)
    };
  }
}

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ============================================================
// OUTPUT ACTION BUTTONS (COPY ALL, DOWNLOAD, CLEAR)
// ============================================================
function initOutputActions() {
  const copyAllBtn = document.getElementById("copyAllLogsBtn");
  const downloadTxtBtn = document.getElementById("downloadTxtBtn");
  const clearOutputBtn = document.getElementById("clearOutputBtn");

  copyAllBtn.addEventListener("click", () => {
    if (generatedLogsData.length === 0) return;
    const fullContent = generatedLogsData
      .map(entry => `${entry.dateHeader}\n${entry.narrative}`)
      .join("\n\n---\n\n");
    copyToClipboard(fullContent, copyAllBtn, "All logs copied to clipboard!");
  });

  downloadTxtBtn.addEventListener("click", () => {
    if (generatedLogsData.length === 0) return;
    downloadAsTxtFile();
  });

  clearOutputBtn.addEventListener("click", () => {
    if (confirm("Clear generated logs display?")) {
      generatedLogsData = [];
      document.getElementById("resultsOutputState").style.display = "none";
      document.getElementById("emptyOutputState").style.display = "flex";
      showToast("Output cleared", "warning");
    }
  });
}

function downloadAsTxtFile() {
  const clientName = document.getElementById("clientNameInput").value.trim() || "Client";
  const serviceType = getSelectedServiceType();
  const dateFormatted = new Date().toISOString().split("T")[0];

  const headerNotice = `============================================================
CARELOG VA — PROFESSIONAL CARE DOCUMENTATION
SERVICE TYPE: ${serviceType}
CLIENT: ${clientName}
GENERATED: ${new Date().toLocaleString()}
STATUS: PRELIMINARY DRAFT — PENDING CAREGIVER & AGENCY SUPERVISOR REVIEW
============================================================\n\n`;

  const logsBody = generatedLogsData
    .map(entry => `${entry.dateHeader} (${entry.wordCount} words)\n${entry.narrative}`)
    .join("\n\n------------------------------------------------------------\n\n");

  const disclaimerFooter = `\n\n============================================================
COMPLIANCE DISCLAIMER:
These care logs are generated as clinical drafts in compliance with service
documentation guidelines. Caregivers and agency staff must review and verify
factual accuracy prior to submission to state Medicaid or agency records.
============================================================`;

  const fullText = headerNotice + logsBody + disclaimerFooter;
  const safeClientName = clientName.replace(/[^a-zA-Z0-9_-]/g, "_");
  const fileName = `CARELOG_${safeClientName}_${dateFormatted}.txt`;

  const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Downloaded: ${fileName}`, "success");
}

// ============================================================
// MOBILE NAVIGATION & ACCESSIBILITY CONTROLS
// ============================================================
function initMobileNavigation() {
  const tabShowFormBtn = document.getElementById("tabShowFormBtn");
  const tabShowOutputBtn = document.getElementById("tabShowOutputBtn");
  const backToFormBtn = document.getElementById("backToFormBtn");
  const mobileStickyGenerateBtn = document.getElementById("mobileStickyGenerateBtn");
  const mobileStickyClientBtn = document.getElementById("mobileStickyClientBtn");
  const changeClientBtn = document.getElementById("changeClientBtn");

  if (tabShowFormBtn) {
    tabShowFormBtn.addEventListener("click", () => {
      setMobileView("form");
      const formCard = document.getElementById("formCard");
      if (formCard) formCard.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (tabShowOutputBtn) {
    tabShowOutputBtn.addEventListener("click", () => {
      setMobileView("output");
      const outputCard = document.getElementById("outputCard");
      if (outputCard) outputCard.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (backToFormBtn) {
    backToFormBtn.addEventListener("click", () => {
      setMobileView("form");
      const formCard = document.getElementById("formCard");
      if (formCard) formCard.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (mobileStickyGenerateBtn) {
    mobileStickyGenerateBtn.addEventListener("click", () => {
      handleGenerateCareLogs();
    });
  }

  if (mobileStickyClientBtn) {
    mobileStickyClientBtn.addEventListener("click", () => {
      if (changeClientBtn) {
        changeClientBtn.click();
      } else {
        renderClientModalList();
        const modal = document.getElementById("clientMemoryModal");
        if (modal) modal.classList.remove("hidden");
      }
    });
  }
}

function setMobileView(viewName) {
  const workspaceGrid = document.getElementById("workspaceGrid");
  const tabShowFormBtn = document.getElementById("tabShowFormBtn");
  const tabShowOutputBtn = document.getElementById("tabShowOutputBtn");

  if (!workspaceGrid) return;

  if (viewName === "output") {
    workspaceGrid.classList.add("mobile-show-output");
    if (tabShowFormBtn) {
      tabShowFormBtn.classList.remove("active");
      tabShowFormBtn.setAttribute("aria-selected", "false");
    }
    if (tabShowOutputBtn) {
      tabShowOutputBtn.classList.add("active");
      tabShowOutputBtn.setAttribute("aria-selected", "true");
    }
  } else {
    workspaceGrid.classList.remove("mobile-show-output");
    if (tabShowFormBtn) {
      tabShowFormBtn.classList.add("active");
      tabShowFormBtn.setAttribute("aria-selected", "true");
    }
    if (tabShowOutputBtn) {
      tabShowOutputBtn.classList.remove("active");
      tabShowOutputBtn.setAttribute("aria-selected", "false");
    }
  }
}

// ============================================================
// UTILITIES (CLIPBOARD, TOAST, ESCAPING)
// ============================================================
async function copyToClipboard(text, triggerBtn, successMessage = "Copied to clipboard!") {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    if (triggerBtn) {
      const originalText = triggerBtn.innerHTML;
      triggerBtn.classList.add("btn-outline-primary");
      triggerBtn.innerHTML = `<span>✓ Copied!</span>`;
      setTimeout(() => {
        triggerBtn.innerHTML = originalText;
        triggerBtn.classList.remove("btn-outline-primary");
      }, 2000);
    }

    showToast(successMessage, "success");
  } catch (err) {
    console.error("Clipboard copy failed:", err);
    showToast("Failed to copy. Please select and copy manually.", "error");
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease-out";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 4000);
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
