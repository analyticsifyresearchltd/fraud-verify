async function getFingerprint() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("verify", 2, 2);
  const canvasHash = canvas.toDataURL();

  const gl = document.createElement("canvas").getContext("webgl");
  const gpu = gl ? gl.getParameter(gl.RENDERER) : "na";

  const data = navigator.userAgent + screen.width + screen.height + gpu + canvasHash;
  return btoa(data).substring(0, 32);
}

getFingerprint().then(fp => {
  window.fp = fp;
  localStorage.setItem("fp", fp);
});
