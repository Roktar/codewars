function pattern(rows,columns,str){
  let result = [];
  
  for(let i=0; i<rows*2+1; i++) {
    if( (i%2) === 0 )
      addTableChar(result, columns);
    else
      fillChar(result, str, Math.ceil(i/2), columns);
  }
  return result.join("\n");
}

function addTableChar(arr, col) {
  let sub = [];
  for(let i=0; i<col; i++)
    sub.push(new Array(3).fill('-').join(""));
  arr.push('+' + sub.join("+") + '+');
}

function fillChar(arr, strs, i, col) {
  let sub = [];
  for(let j=col; j>0; j--)
    sub.push(' ' + (strs[(i*col)-j] || ' ') + ' ');
  arr.push('|' + sub.join("|") + '|');
}