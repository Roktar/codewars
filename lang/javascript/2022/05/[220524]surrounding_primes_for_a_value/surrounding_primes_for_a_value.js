function primeBefAft(num) {
  return [getPrime(num-1, -1), getPrime(num+1, 1)];
}

function getPrime(n, dir) {
  while(true) {
    if(isPrime(n))
      return n;
    else
      n += dir;
  }
}

function isPrime(num) {
  for(let i=2; i<num/2; i++) {
    if(num%i === 0)
      return false;
  }
  
  return true;
}