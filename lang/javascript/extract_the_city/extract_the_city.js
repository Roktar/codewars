function concatSecondDiagonal(twoDimArray) {
  return twoDimArray.map( (v, i) => v[v.length-1-i] ).join("");
}