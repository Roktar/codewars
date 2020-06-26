// Group items by category
function solution(input) {
  let obj;

  return Object.keys(obj = input.split(',').reduce( (obj, v) => {
    let kv = v.split("_");
    if(!obj[kv[0]])
      kv[0] = 'other';
    obj[kv[0]].push(kv[1]);
    return obj;
  }, {fruit:[], meat:[], other:[], vegetable:[]})).map( k => `${k}:${obj[k].sort().join(',')}` ).join`\n`;
}