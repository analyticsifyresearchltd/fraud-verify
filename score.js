function computeFraudScore(){
  logicCheck();
  semanticCheck(humanAnswers.q5);

  let score = logicScore + semanticScore;

  if(behavior.clicks<3) score -= 10;
  if(behavior.keys<3) score -= 10;
  if(vpnRisk>0) score -= vpnRisk;

  return score;
}
