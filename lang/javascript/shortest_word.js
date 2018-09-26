var _ = require("underscore");

function findShort(s){
  return _.chain(s.split(" ")).reduce( (arr, v, i) => {
    arr.push([i, v.length]);
    return arr;
  }, []).sort( (a, b) => a[1] - b[1] ).value()[0][1];  
}