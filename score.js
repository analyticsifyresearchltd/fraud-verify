window.computeScore = function () {

  // HARD LOGIC FAILS
  if (humanAnswers.q2 !== "idea") return -100;
  if (humanAnswers.q3 !== "no") return -100;
  if (humanAnswers.q4 !== "yes") return -100;
  if (!validateQ5Semantic(humanAnswers.q5)) return -100;

  let s = 0;

  if (fraud.mouseMoves > 60) s += 10;
  if (fraud.keys > 25) s += 10;
  if (fraud.scrolls > 2) s += 10;

  const time = (Date.now() - fraud.start) / 1000;
  if (time > 35) s += 10;

  if (fraud.focusLoss > 0) s -= 15;
  if (fraud.pasteEvents > 0) s -= 25;

  s -= vpnScore;

  const prev = localStorage.getItem("fp");
  if (prev && prev === window.fp) s -= 20;

  return s;
};
