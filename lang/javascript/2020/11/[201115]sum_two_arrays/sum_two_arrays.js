function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join('')) || 0;
  let arrayToNumber2 = parseInt(array2.join('')) || 0;
  let totalNumber = (arrayToNumber1 + arrayToNumber2).toString();
  let arr = [];
  
  if(totalNumber == 0)
    return [];
  
  if(totalNumber.includes("-"))
    arr = [totalNumber.substr(0, 2), ...totalNumber.slice(2)].map( v => parseInt(v) );
  else 
    arr = [...totalNumber].map( v => parseInt(v) );
  
  return arr;
}

// 재풀이
function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join('')) || 0;
  let arrayToNumber2 = parseInt(array2.join('')) || 0;
  let totalNumber = (arrayToNumber1 + arrayToNumber2).toString();
  
  return (totalNumber == 0 ? [] : totalNumber.match(/-?\d{1}/g).map(Number));
}