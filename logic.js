function ruleScore(a){
 let score = 0

 if(a.q2 === "idea") score += 30
 if(a.q3 === "no") score += 30
 if(a.q4 === "yes") score += 20

 return score
}
