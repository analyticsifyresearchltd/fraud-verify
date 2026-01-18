const FINAL_RETURN =
 "https://au.focusvision.com/survey/selfserve/6a7/260103?";

document.getElementById("nextBtn").addEventListener("click", () => {

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const url =
    FINAL_RETURN +
    "&bf_result=" + verdict +
    "&bf_score=" + score +
    "&bf_vpn=" + vpnScore +
    "&bf_fp=" + (window.fp || "na");

  window.location.href = url;
});
