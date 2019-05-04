function nextVersion(version){
  var arr = version.split(".");
  versionUp(arr, arr.length -1, 1);
  
  return arr.join(".");
}

function versionUp(arr, step, inc) {
  if(step < 0)
    return;
  
  arr[step] = parseInt(arr[step]) +1;
  
  if(arr[step] > 9) {
    versionUp(arr, step-1, inc);
    if(step > 0)
      arr[step] = 0;
  }
}