function draw(waves){
  'use strict';
  let max = Math.max.apply(null, waves);
  let size = waves.length;
  let waveArray = [];
  let returnStr = "";
    
  for(let i=0; i<max; i++) {
    let subArray = [];
    for(let j = 0; j<size; j++)
      subArray[j] = '□';
    waveArray[i] = subArray;
  }

  for(let i=0; i<size; i++) {
    let direction = max -1;

    for(let j = 0; j < waves[i]; j++ ) {
        waveArray[direction-j][i] = '■';
    }
  }

  for(let i=0; i<max; i++)
    returnStr += waveArray[i].join("") + ( i != (max-1) ? "\n" : "");

  return returnStr;
}

//draw([1, 2, 3, 3, 2, 1]);
console.log(draw([1, 2, 3, 3, 2, 1]));
