function countAdjacentPairs(searchString) {
  return searchString.toLowerCase().split(" ").reduce( (t, v, i, o) => t=(o[i] === o[i+1] && o[i-1] !== o[i] ? t+=1 : t), 0);
}