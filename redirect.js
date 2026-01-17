function getReturnURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("return");
}

function isOnQ5() {
  const q5 = document.getElementById("q5-page");
  return q5 && q5.style.display !== "none";
}

document.addEventListener("click", function (e) {

  if (!e.target.matches("#nextBtn")) return;

  // Only fire on FINAL page (Q5)
  if (!isOnQ5()) return;

  const score = computeScore();
  const verdict = score >= 30 ? "human" : "bot";

  const returnURL = getReturnURL();

  if (!returnURL) {
    alert("Return URL missing");
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
