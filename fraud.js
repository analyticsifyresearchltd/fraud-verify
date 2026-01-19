window.behavior = { clicks:0, keys:0, scroll:0, start:Date.now() };

document.addEventListener("click",()=>behavior.clicks++);
document.addEventListener("keydown",()=>behavior.keys++);
document.addEventListener("scroll",()=>behavior.scroll++);
