let mouse=0, keys=0, scrolls=0, tabs=0

document.addEventListener("mousemove",()=>mouse++)
document.addEventListener("keydown",()=>keys++)
document.addEventListener("scroll",()=>scrolls++)
window.addEventListener("blur",()=>tabs++)

window.fraudData = {
 mouse, keys, scrolls, tabs
}
