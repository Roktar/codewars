function decrypt(message, key) {
  let arr = [], keys = key.match(/p[0-9]+|[0-9]+/g);
  let trashValue = +keys.shift().replace("p", "");
  
  keys.forEach( v => arr.push(message[v-1] ));
  
  return arr.slice(0, arr.length-trashValue).join``;
}