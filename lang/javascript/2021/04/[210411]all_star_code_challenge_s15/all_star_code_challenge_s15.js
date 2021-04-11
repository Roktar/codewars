function rotate(str){
  var arr = [];
  
  for(let i=0; i<str.length; i++)
    arr.push((str = str.substr(1, str.length-1) + str.substr(0, 1)));
  
  return arr;
}