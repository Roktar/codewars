const checkAlphabetType = ch => ch.charCodeAt(0) - 97 >= 0 ? 'lower' : 'upper';

function typist(s){
  let prevType = checkAlphabetType(s[0]);
  
  return [...s].reduce( (obj, ch) => {
    let type = checkAlphabetType(ch);
        
    if(obj.prevType == type)
      obj.total += 1;
    else {
      obj.total += 2;
      obj.prevType = type;
    }
    
    return obj;
  }, {total: 'lower' == prevType ? 0 : 1, prevType:prevType }).total;
}