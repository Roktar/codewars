function solve(arr){
  let obj = {};
  
  for(let i=0; i<arr.length; i++) {
    if(!obj[arr[i]])
      obj[arr[i]] = [];
    obj[arr[i]].push(arr[i]);
  }
  
  return Object.entries(obj).sort( (a, b) => b[1].length-a[1].length || a[0]-b[0]).reduce( (tot, arr) => tot.concat(arr[1]), []);
}