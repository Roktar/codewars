function anagrams(word, words) {
  let str = [...word].sort().join``;
  return words.filter( v => str === [...v].sort().join`` );
}