function fp(){
  const c=document.createElement("canvas");
  const gl=c.getContext("webgl");
  return btoa([
    navigator.userAgent,
    screen.width,screen.height,
    gl.getParameter(gl.RENDERER)
  ].join("|"));
}
window.deviceFP = fp();
