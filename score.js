async function getScore(){
 let score = 0;
 let flags = [];

 if(fraudData.mouse < 50){score+=20; flags.push("low_mouse")}
 if(fraudData.keys < 5){score+=15; flags.push("low_keys")}
 if(fraudData.scroll < 1){score+=10; flags.push("no_scroll")}
 if(fraudData.tabs > 0){score+=15; flags.push("tab_switch")}
 if(!fraudData.clicked){score+=25; flags.push("attention_fail")}
 if(fraudData.honesty){score+=25; flags.push("honesty_fail")}

 let vpn = await checkVPN();
 if(vpn.bad){score+=30; flags.push("vpn")}

 return {score, flags}
}
window.getScore = getScore;
