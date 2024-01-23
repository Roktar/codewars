function generateHashtag (str) {
  if(!/\w/.test(str) || str.match(/\w+/)[0].length >= 140) return false;

  return `#${str.match(/\w+(?=\s+?)?/g).map( v => v[0].toUpperCase()+v.substr(1)).join('')}`;  
}