/*****************************************************************
 * FRAUD VERIFY – GATEWAY MODE (HARDENED)
 *****************************************************************/

const SURVEY_URL =
  "https://au.focusvision.com/survey/selfserve/6a7/260103";

/* --------------------------------------------------
   Q5 VISIBILITY CHECK
-------------------------------------------------- */
function isOnQ5() {
  const q5 = document.getElementById("q5-page");
  return q5 && getComputedStyle(q5).display !== "none";
}

/* --------------------------------------------------
   SCORING ENGINE
-------------------------------------------------- */
function computeScore() {
  let score = 0;

  if (window.answers.q2 === "idea") score += 10;
  if (window.answers.q3 === "no") score += 10;
  if (window.answers.q4 === "yes") score += 10;
  if (validateQ5(window.answers.q5)) score += 10;

  return score;
}

/* --------------------------------------------------
   Q5 SEMANTIC VALIDATION
-------------------------------------------------- */
function validateQ5(text) {
  if (!text) return false;

  text = text.trim();

  if (text.length < 25) return false;
  if (!/[.!?]$/.test(text)) return false;

  const pets = [
    "dog","cat","puppy","kitten","rabbit",
    "bird","parrot","fish","hamster"
  ];

  const reasons = [
    "because","they are","they're","people like",
    "friendly","loyal","loving","cute","companionship"
  ];

  const t = text.toLowerCase();

  return (
    pets.some(p => t.includes(p)) &&
    reasons.some(r => t.includes(r))
  );
}

/* --------------------------------------------------
   HARD EVENT INTERCEPTOR (CAPTURE PHASE)
-------------------------------------------------- */
document.addEventListener("click", function (e) {

  const btn = e.target.closest("#nextBtn");
  if (!btn) return;

  // CRITICAL: Only act on Q5
  if (!isOnQ5()) return;

  e.preventDefault();
  e.stopImmediatePropagation();

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const redirectURL =
    SURVEY_URL +
    "?bf_result=" + verdict +
    "&bf_score=" + score;

  window.location.replace(redirectURL);

}, true); // <-- CAPTURE MODE
