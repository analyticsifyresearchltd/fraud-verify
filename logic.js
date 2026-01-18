let currentPage = 0;
const pages = document.querySelectorAll(".question-page");

window.answers = { q2:"", q3:"", q4:"", q5:"" };

function showPage(i) {
  pages.forEach(p => p.style.display = "none");
  pages[i].style.display = "block";
}

showPage(0);

document.addEventListener("click", function(e){
  if (!e.target.matches("#nextBtn")) return;
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

function selectQ2(v){ answers.q2 = v; next(); }
function selectQ3(v){ answers.q3 = v; next(); }
function selectQ4(v){ answers.q4 = v; next(); }

function next(){
  currentPage++;
  showPage(currentPage);
}

document.getElementById("q5text").addEventListener("input", e=>{
  answers.q5 = e.target.value;
});
