// #1
function findSummands(n) {
  let trgtVal = Math.pow(n, 3);
  let v = 1;
  let arr;
  
  while( (v*v)*n < trgtVal )
    v++;
  
  arr = new Array(n).fill( (v%2 === 0 ? (v*n)+1 : v*n) );
  arr.makeValue = makeValue.bind(arr);
  arr.makeValue(0, parseInt(arr.length/2), (arr, i, end) => arr[i] -= (2*(end-i)) );
  arr.makeValue(parseInt(arr.length/2), arr.length-1, (arr, i, end, start) => arr[i] += (2*(i-start)) );

  return arr;
}

function makeValue(start, end, func) {
  for(let i=start; i<=end; i++)
    func(this, i, end, start);
}

// #2 - chaining
function findSummands(n) {
  let trgtVal = Math.pow(n, 3);
  let v = 1;
  let arr;
  
  while( (v*v)*n < trgtVal )
    v++;
  
  arr = new Array(n).fill( (v%2 === 0 ? (v*n)+1 : v*n) );
  arr.makeValue = makeValue.bind(arr);

  return arr.makeValue(0, parseInt(arr.length/2), minus).makeValue(parseInt(arr.length/2), arr.length-1, plus);
}

function minus(arr, i, end) {
  arr[i] -= (2*(end-i));
}

function plus(arr, i, end, start) {
  arr[i] += (2*(i-start));
}

function makeValue(start, end, func) {
  for(let i=start; i<=end; i++)
    func(this, i, end, start);
  return this;
}