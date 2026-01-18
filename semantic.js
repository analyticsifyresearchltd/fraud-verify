function semanticScore(text){
 text = text.toLowerCase().trim()

 if(text.length < 20) return 0
 if(!text.includes(".")) return 0

 const pets = ["dog","cat","fish","bird","rabbit","hamster"]

 let found = pets.some(p => text.includes(p))
 if(!found) return 0

 return 20
}
