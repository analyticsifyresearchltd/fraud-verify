window.semanticScore = 0;

function semanticCheck(txt){
  if(!txt) return;
  if(txt.length>25 && /dog|cat|pet/.test(txt.toLowerCase()))
    semanticScore += 10;
}
