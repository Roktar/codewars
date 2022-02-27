function getCountedNucleotides(genCode){
  return [...genCode.toUpperCase()].reduce( (obj, v) => ++obj[v] && obj, {A:0, C:0, G:0, T:0});
}