async function getScore(){
 let score = 0
 let flags = []

 if(fraudData.mouse < 40){score+=20;flags.push("low_mouse")}
 if(fraudData.keys < 10){score+=15;flags.push("low_keys")}
 if(fraudData.scrolls < 1){score+=10;flags.push("no_scroll")}
 if(fraudData.tabs > 0){score+=15;flags.push("tab_switch")}

 let a = window.humanAnswers || {}

 if(a.q2 !== "idea"){score+=20;flags.push("concept_fail")}
 if(a.q3 === "yes"){score+=30;flags.push("fake_location")}
 if(a.q4 === "defnot"){score+=30;flags.push("logic_fail")}

 if(!a.q5 || a.q5.split(" ").length < 8){score+=25;flags.push("short_text")}

 let vpn = await checkVPN()
 if(vpn.bad){score+=30;flags.push("vpn")}

 return {score,flags}
}
window.getScore = getScore
