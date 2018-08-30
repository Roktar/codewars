function battle(x, y) {
  return result(x, y, calc);
}

function calc(s) {
  return [...s].reduce( (t, v, i) => {
    return t + (v.charCodeAt(0) - 64);
  }, 0);
}

function result() {
  let arr = [arguments[2].call(this, arguments[0]), arguments[2].call(this, arguments[1])];
  let obj = [ { [arr[0]] : arguments[0] }, { [arr[1]] : arguments[1] }]
  let maxValue = Math.max.apply(obj, arr).toString();
  
  if( arr[0] == arr[1] )
    return "Tie!";
  else 
    return Object.values(obj.find( (item, i) => Object.keys(item)[0] == maxValue))[0];
}