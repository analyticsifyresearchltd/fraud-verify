function getReturnURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("return");
}

document.getElementById("nextBtn").addEventListener("click", () => {

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const returnURL = getReturnURL();

  if (!returnURL) {
    alert("Return URL missing.");
    return;
  }

  const redirectURL =
    returnURL +
    "&bf_result=" + verdict +
    "&bf_score=" + score +
    "&bf_vpn=" + vpnScore +
    "&bf_fp=" + (window.fp || "na");

  window.location.href = redirectURL;
});
