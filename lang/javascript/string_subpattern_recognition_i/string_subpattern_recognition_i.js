function hasSubpattern(string){
  if(string.length < 2)
    return false;
  else if(string.length === 2) {
    if(string[0] != string[1])
      return false;
  }
    
  for(let i=0; i<parseInt(string.length/2); i++) {
    let str = string.substring(0, i+2);

    if(string === str.repeat(parseInt(string.length/str.length)))
      return true;
  }
  
  return false;
}