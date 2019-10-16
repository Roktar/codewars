function letterCount(s){
  let obj = {};
  let nullObject = {length: 0};
  
  for(let i=0; i < 26; i++) {
    let ch = String.fromCharCode(97+i);
    let len = (s.match(new RegExp(ch, "gi")) || nullObject).length;
    
    if(len)
      obj[ch] = len;
  }
  
  return obj;
}