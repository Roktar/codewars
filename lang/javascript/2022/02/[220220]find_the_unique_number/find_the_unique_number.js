function findUniq(arr) {  
  return arr[arr.findIndex( (v, i, obj) => obj.indexOf(v) === obj.lastIndexOf(v))];
}