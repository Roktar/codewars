// #1 - while
function foldArray(array, runs) {
    while((runs--) > 0) {
      let mid = parseInt(array.length/2);
      let new_array = [], len = array.length;
      
      for(let i=0; i<mid; i++)
        new_array[i] = array[i] + array[len-1-i];
      
      if(len%2==1)
        new_array.push(array[mid]);
      
      array = new_array;
    }
      
    return array;
  }
  
  // #2 - recursive
  function foldArray(array, runs) {
    if(runs > 0) {
      let mid = parseInt(array.length/2);
      let new_array = [], len = array.length;
      
      for(let i=0; i<mid; i++)
        new_array[i] = array[i] + array[len-1-i];
      
      if(len%2==1)
        new_array.push(array[mid]);
          
      return foldArray(new_array, --runs);
    } else
      return array;
  }