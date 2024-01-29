function alphabetized(s) {
  let map = new Map();
  
  for(let ch of [...s.replace(/[^a-zA-Z]+/g, "")]) {
    let key = ch.toUpperCase().charCodeAt(0)-65, arr = map.get(key) || [];
    map.set( key, arr.push(ch) && arr);
  }
  
  return [...map].sort( (a, b) => a[0] - b[0] ).map( arr => arr[1].join`` ).join``;
}