const memo = {};

function getScore(n) { 
  return n === 1 ? 50 : (memo[n] ? memo[n] : memo[n] = (n*50)+getScore(n-1));
}