function moveZeros(arr) {
  let zCnt = 0;
  let newArr = [];
  
  for(let v of arr) {
    if(Number.isInteger(v) && v == 0) zCnt++;
    else newArr.push(v);
  }
  
  return newArr.concat(Array.from({length:zCnt}).fill(0)) ;
}