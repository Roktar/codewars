var _ = require("underscore");
const reverseString = str => [...str].reverse().join("");

function reverse(str){
  return str.split(" ").reduce( (arr, v, i) => _.chain(arr).push( (i%2) === 0 ? v : reverseString(v) ).value(), []).join(" ");
}

// function reverse(str){
//   let arr = [];
//   str.split(" ").forEach( (v, i) => arr.push( ((i%2) === 0 ? v : reverseString(v)) ) );
//   return arr.join(" ");
// }