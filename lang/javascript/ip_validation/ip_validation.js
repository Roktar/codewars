function isValidIP(str) {
  let arr = str.split('.');
  let t = /^(0|[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  
  if(arr.length < 4 || arr.length > 4)
    return false;
  else
    return arr.every( v => t.test(v));
}