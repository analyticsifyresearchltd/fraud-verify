let mouseMoves = 0;
let keyCount = 0;
let scrolls = 0;
let tabSwitch = 0;
let clickedBlue = false;
let honestyFail = false;

document.addEventListener("mousemove", ()=> mouseMoves++);
document.addEventListener("keydown", ()=> keyCount++);
document.addEventListener("scroll", ()=> scrolls++);
window.addEventListener("blur", ()=> tabSwitch++);

document.getElementById("blue").onclick = ()=> clickedBlue=true;

document.getElementById("word").addEventListener("change", e=>{
 if(e.target.value.toLowerCase() !== "runs") honestyFail=true;
});

window.fraudData = {
 get mouse(){return mouseMoves},
 get keys(){return keyCount},
 get scroll(){return scrolls},
 get tabs(){return tabSwitch},
 get clicked(){return clickedBlue},
 get honesty(){return honestyFail}
}
