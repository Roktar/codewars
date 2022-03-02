// #1
function dataReverse(data) {
  let subset = [];
  for(let i=0; i<data.length/8; i++)
    subset.push(data.slice(i*8, i*8+8));
  
  return subset.reverse().reduce( (rArr, iArr) => rArr.concat(iArr.flat()), []);
}

// #2
function dataReverse(data) {
  return (data.join``.match(/[0|1]{8}/g) || []).reverse().reduce( (rArr, str) => rArr.concat([...str].map( v => +v)), []);
}