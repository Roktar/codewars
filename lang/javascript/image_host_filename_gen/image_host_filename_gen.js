function generateName()
{
  let strs = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let len = strs.length;
  let ret_arr;
  
  do {
    ret_arr = [];
    for(let i=0; i<6; i++)
      ret_arr.push(strs[parseInt((Math.random() * len))]);
   } while(photoManager.nameExists(ret_arr.join("")))
  
  return ret_arr.join("");
}