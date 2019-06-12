function alphabetized(s) {
  let obj =[...s].reduce( (obj, v, i) => {
    if(valid(v)) {
      let order = v.charCodeAt(0) - isCaseAsciiValue(v);
      
      if(!obj[order])  obj[order] = "";
      obj[order] += v;
    }
    return obj;
  }, {});
  
  return Object.keys(obj).map( v => obj[v] ).join("");
}

function isCaseAsciiValue(v) {
  if(v == v.toUpperCase())
    return 65;
  else
    return 97;
}

function valid(v) {
  let asciiCode = v.charCodeAt(0);
  return (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122);
}