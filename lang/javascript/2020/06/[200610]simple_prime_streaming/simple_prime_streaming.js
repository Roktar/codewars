const eratosthenes = new Array(41000).fill(0);
let primeString = null;

for(let i=2; i<41000; i++) {
  if(eratosthenes[i] != null)
    eratosthenes.push(i);
  for(let j=i; j<41000; j+=i)
     eratosthenes[j] = null;
}

primeString = eratosthenes.slice(2).join``;

// #1
const solve = (a,b) => primeString.substr(a, b);

// #2
const solve = "".substr.bind(eratosthenes.slice(2).join``);