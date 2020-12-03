function pyramid(n) {
  return Array.from({length:n}).map( (v, i) => Array.from({length: i+1}).fill(1) );
} 