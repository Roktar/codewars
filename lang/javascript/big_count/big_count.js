var countBits = function(n) {
  let arr = n.toString(2).match(/1/g);
  
  return (arr ? arr.length : 0);
};