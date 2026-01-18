const SURVEY_URL =
  "https://au.focusvision.com/survey/selfserve/6a7/260103";

function isOnQ5() {
  const q5 = document.getElementById("q5-page");
  return q5 && getComputedStyle(q5).display !== "none";
}

function validateQ5(text) {
  if (!text) return false;
  text = text.trim();
  if (text.length < 25) return false;
  if (!/[.!?]$/.test(text)) return false;

  const pets = ["dog","cat","puppy","kitten","rabbit","bird","fish","hamster"];
  const reasons = ["because","they are","friendly","loving","loyal","cute","companionship"];

  const t = text.toLowerCase();
  return pets.some(p=>t.includes(p)) && reasons.some(r=>t.includes(r));
}

function computeScore() {
  let s = 0;
  if (answers.q2 === "idea") s += 10;
  if (answers.q3 === "no") s += 10;
  if (answers.q4 === "yes") s += 10;
  if (validateQ5(answers.q5)) s += 10;
  return s;
}

document.addEventListener("click", function(e){

  const btn = e.target.closest("#nextBtn");
  if (!btn) return;
  if (!isOnQ5()) return;

  e.preventDefault();
  e.stopImmediatePropagation();

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  window.location.replace(
    SURVEY_URL +
    "?bf_result=" + verdict +
    "&bf_score=" + score
  );

}, true);
