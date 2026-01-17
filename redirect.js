/*****************************************************************
 * FRAUD VERIFY – GATEWAY MODE (PRODUCTION)
 * Company: Analyticsify Research Ltd.
 * Purpose: Pre-survey human verification
 *****************************************************************/

const SURVEY_URL =
  "https://au.focusvision.com/survey/selfserve/6a7/260103?";

/* --------------------------------------------------
   FINAL PAGE CHECK (Q5 ONLY)
-------------------------------------------------- */
function isOnQ5() {
  const q5 = document.getElementById("q5-page");
  return q5 && q5.style.display !== "none";
}

/* --------------------------------------------------
   SCORING ENGINE
-------------------------------------------------- */
function computeScore() {
  let score = 0;

  // Q2 (Concept association)
  if (window.answers.q2 === "idea") score += 10;

  // Q3 (Residency trap)
  if (window.answers.q3 === "no") score += 10;

  // Q4 (Phone usage sanity check)
  if (window.answers.q4 === "yes") score += 10;

  // Q5 (AI text validation)
  if (validateQ5(window.answers.q5)) score += 10;

  return score;
}

/* --------------------------------------------------
   Q5 NLP VALIDATION
-------------------------------------------------- */
function validateQ5(text) {
  if (!text) return false;

  text = text.trim();

  // Must be a full sentence
  if (text.length < 25) return false;
  if (!/[.!?]$/.test(text)) return false;

  const pets = [
    "dog", "cat", "puppy", "kitten", "rabbit",
    "bird", "parrot", "fish", "hamster"
  ];

  const reasons = [
    "because", "they are", "they're", "people like",
    "friendly", "loyal", "loving", "cute", "companionship"
  ];

  const t = text.toLowerCase();

  const hasPet = pets.some(p => t.includes(p));
  const hasReason = reasons.some(r => t.includes(r));

  return hasPet && hasReason;
}

/* --------------------------------------------------
   FINAL SUBMIT HANDLER (Q5 ONLY)
-------------------------------------------------- */
document.addEventListener("click", function (e) {

  if (!e.target.matches("#nextBtn")) return;

  // CRITICAL FIX — only fire on Q5
  if (!isOnQ5()) return;

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const redirectURL =
    SURVEY_URL +
    "?bf_result=" + verdict +
    "&bf_score=" + score;

  window.location.href = redirectURL;
});

