function sortString(string,ordering) {
  let newOrderingArray = [];
  let stringArray = [...string];
  
  for(let i=0; i<ordering.length; i++) {
    for(let j=0; j<stringArray.length; j++) {
      if(stringArray[j] === ordering[i]) {
        newOrderingArray.push(string[j]);
        stringArray[j] = '';
      }
    }
  }
  
  return newOrderingArray.concat(stringArray).join("");
}