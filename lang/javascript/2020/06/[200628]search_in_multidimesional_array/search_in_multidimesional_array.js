// for
var locate = function(arr,value, result){
  if(arr.includes(value))
    return true;
  
  for(let i=0; i<arr.length; i++) {
    if(Array.isArray(arr[i]))
      result = locate(arr[i], value, result);
  }
  
  return !!result;
}

// forEach
var locate = function(arr,value, result){
  if(arr.includes(value))
    return true;

  arr.forEach( v => Array.isArray(v) ? result = locate(v, value, result) : '' );
  
  return !!result;
}