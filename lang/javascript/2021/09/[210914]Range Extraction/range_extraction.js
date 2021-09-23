function solution(list){
  const rangeExtract = (idx, arr, cnt) => arr[idx]+1 === arr[idx+1] ? rangeExtract(idx+1, arr, ++cnt) : cnt;
  let values = [];
  
  for(let i=0; i<list.length; i++) {
    let range = rangeExtract(i, list, 1);
    
     if(range > 2) {
      values.push(list[i]+"-"+list[i+(range-1)]);
      i += (range-1);
      range = 0;
    } else
      values.push(list[i]);
  }
  
  return values.join`,`;
}