window.logicScore = 0;

function logicCheck(){
  if(humanAnswers.q2==="idea") logicScore+=10;
  if(humanAnswers.q3==="no") logicScore+=10;
  if(humanAnswers.q4==="yes") logicScore+=10;
}
