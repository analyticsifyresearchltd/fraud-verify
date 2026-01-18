function validateQ5Semantic(text) {
  if (!text) return false;

  const t = text.toLowerCase();

  const pets = ["dog","cat","parrot","rabbit","hamster","fish","bird","turtle"];
  const reasons = ["like","love","friendly","loyal","cute","playful","affection","companionship","fun","protect","comfort"];

  const petFound = pets.some(p => t.includes(p));
  const reasonFound = reasons.some(r => t.includes(r));

  const wordCount = text.trim().split(/\s+/).length;
  const sentenceCount = text.split(/[.!?]/).filter(s => s.trim().length > 5).length;

  if (!petFound) return false;
  if (!reasonFound) return false;
  if (wordCount < 8) return false;
  if (sentenceCount < 1) return false;

  return true;
}
