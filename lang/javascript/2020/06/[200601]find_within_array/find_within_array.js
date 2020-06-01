var findInArray = function(array, iterator) {
  if(!array.length)
    return -1;
 
  let idx = -1;
    
  array.some( (v, i) => (iterator(v, i) ? true | (idx = i) : false) );
  
  return idx;
};