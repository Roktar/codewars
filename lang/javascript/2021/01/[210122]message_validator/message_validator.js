function isAValidMessage(message) {
  let seq = message.match(/[\d]+|\w*?[^\d]+|\d+/g) || [];
  
  if(seq.length%2 === 1)
    return false;
  
  for(let i=0; i<seq.length; i+=2) {
    if(seq[i] != seq[i+1].length)
      return false;
  }
  
  return true;
}