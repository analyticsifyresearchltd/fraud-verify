function runScoring(){
 let score = 0

 score += ruleScore(window.humanAnswers)
 score += semanticScore(window.humanAnswers.q5)
 score -= window.vpnRisk

 window.finalScore = score

 finalizeRedirect()
}
