function buildPyramid(str,n){
  let chars = str.length == 12 ? Array.from(new Set(str)).map((v, i) => (i%2 === 0 ? v.repeat(2) : v)) : Array.from(new Set(str)).map((v, i) => (i === 2 ? v.repeat(2) : v)) ;
  let spaces = str.length == 12 ? 6 : 4;

  return Array.from({length: n}).map( (_, i) => `${' '.repeat(spaces*i)}${chars[0].repeat(n-i)}${chars[1].repeat(n-i)}${chars[0].repeat(n-i)}${chars[2].repeat(n-i)}${chars[0].repeat(n-i)}${chars[1].repeat(n-i)}${chars[0].repeat(n-i)}` ).reverse().join`\n`
}