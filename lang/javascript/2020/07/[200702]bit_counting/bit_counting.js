var countBits = function(n) {
  return [...(n).toString(2)].filter( v => v == 1).length;
};