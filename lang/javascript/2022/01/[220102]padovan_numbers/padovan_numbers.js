const memo = {0: 1, 1: 1, 2: 1}
const padovan = n => (memo[n] ? memo[n] : memo[n] = padovan(n-2) + padovan(n-3));