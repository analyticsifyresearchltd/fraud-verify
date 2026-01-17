window.fraud = {
  mouseMoves: 0,
  clicks: 0,
  keys: 0,
  scrolls: 0,
  focusLoss: 0,
  pasteEvents: 0,
  start: Date.now()
};

document.addEventListener("mousemove", () => fraud.mouseMoves++);
document.addEventListener("click", () => fraud.clicks++);
document.addEventListener("keydown", () => fraud.keys++);
document.addEventListener("scroll", () => fraud.scrolls++);
window.addEventListener("blur", () => fraud.focusLoss++);
document.addEventListener("paste", () => fraud.pasteEvents++);
