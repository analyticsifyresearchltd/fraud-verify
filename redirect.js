const SURVEY =
 "https://au.focusvision.com/survey/selfserve/6a7/260103";

function onQ5(){
  const q=document.getElementById("q5-page");
  return q && getComputedStyle(q).display!=="none";
}

document.addEventListener("click",function(e){
  const btn=e.target.closest("#nextBtn");
  if(!btn || !onQ5()) return;

  e.preventDefault();
  e.stopImmediatePropagation();

  const score = computeFraudScore();
  const status = score>=25 ? "PASS":"FAIL";

  const url =
    SURVEY +
    "?FraudScore="+score+
    "&FraudStatus="+status+
    "&Fingerprint="+deviceFP;

  location.replace(url);
}, true);
