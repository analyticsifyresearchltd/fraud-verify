function sendResult(){
  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const back = new URLSearchParams(window.location.search).get("return");
  if(!back) return;

  const url = back +
    "?bf_result=" + verdict +
    "&bf_score=" + score +
    "&bf_vpn=" + vpnScore +
    "&bf_fp=" + (window.fp || "na");

  window.location = url;
}

// Trigger when Q5 NEXT is clicked (page finishes)
window.addEventListener("beforeunload", sendResult);
