window.computeScore = function(){
  let s = 0;

  // Human motor behavior
  if(fraud.mouseMoves > 60) s += 10; else s -= 10;
  if(fraud.clicks > 3) s += 10;
  if(fraud.keys > 25) s += 10;
  if(fraud.scrolls > 2) s += 10;

  // Time on portal
  const t = (Date.now() - fraud.start)/1000;
  if(t > 35) s += 10; else s -= 10;

  // Tab switching / multitabbing
  if(fraud.focusLoss > 0) s -= 15;

  // Copy-paste detection
  if(fraud.pasteEvents > 0) s -= 25;

  // Logic traps (Q2–Q5)
  if(window.humanAnswers){
    if(humanAnswers.q2 === "idea") s += 10; else s -= 20;
    if(humanAnswers.q3 === "no") s += 5; else s -= 10;
    if(humanAnswers.q4 === "yes") s += 5;
    if((humanAnswers.q5||"").split(" ").length > 7) s += 10; else s -= 15;
  }

  // VPN / proxy penalty
  s -= window.vpnScore;

  // Repeat-farm blocking
  const prev = localStorage.getItem("fp");
  if(prev && prev === window.fp) s -= 20;

  return s;
};
