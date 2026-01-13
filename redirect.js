setTimeout(async ()=>{
 let result = await getScore();

 let verdict = result.score >= 40 ? "bot" : "human";

 let params = new URLSearchParams(window.location.search);
 let back = params.get("return");

 window.location.href =
 back +
 "?bf_result=" + verdict +
 "&bf_score=" + result.score +
 "&bf_flags=" + result.flags.join(",");
}, 15000);
