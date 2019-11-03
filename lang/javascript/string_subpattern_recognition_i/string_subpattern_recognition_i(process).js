function hasSubpattern(string){
  let patterns = [];

  if(string.length < 2)
    return false;
  else if(string.length ===2) {
    if(string[0] != string[1])
      return false;
  }
    
  for(let i=0; i<parseInt(string.length/2); i++) {
    let str = string.substring(0, i+2);
    //let cnt = string.match( new RegExp(str, "g")).length;
    
    //if( str.repeat(cnt) === string)
    if(string === str.repeat(parseInt(string.length/str.length)))
      return true;
    
  }
    
//   for(let i=0; i<patterns.length; i++) {
//     let cnt = string.match( new RegExp(patterns[i], "g")).length;
    
//     if( patterns[i].repeat(cnt) === string )
//       return true;

//   }
  
  return false;
    
//   let s = new Set(patterns);
      
//   return s.some(string, (str, v) => {
//     let obj = string.match( new RegExp(v, "gi"));
//     return v.repeat(obj.length) === str;}
//   );
}

Set.prototype.some = function(str, func) {  
  for(let v of this.values()) {
    if(func(str, v))
      return true;
  }
  return false;
}