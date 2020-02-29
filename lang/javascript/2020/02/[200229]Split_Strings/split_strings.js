function solution(str){
  let arrays = str.match(/[A-Za-z]{1,2}/g);
  
  if(typeof arrays == "object" && !arrays)
    return [];
       
  if( (arrays[arrays.length-1].length % 2) == 1)
    arrays[arrays.length-1] += "_";
       
 return arrays;
}