function countAnimals(sentence) {
  let stc = sentence.match(/[0-9]+/g);
  return (!stc ? 0 : stc.reduce( (t, v, i) => t+=parseInt(v), 0 ));
}