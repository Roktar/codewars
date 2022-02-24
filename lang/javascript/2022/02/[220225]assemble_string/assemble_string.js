function assembleString(array){
  let arr = [];
  
  for(let i=0; i<array.length; i++) {  
    for(let j=0; j<array[i].length; j++) {
      if(array[i][j] !== '*') {
        arr[j] = array[i][j]; 
        continue;
      }
      if(!arr[j]) arr[j] = '*';
    }
  }
  
  return arr.join``.replace(/[\*]/g, '#');
}