function bowlingPins(arr) {
  let bowlingPin = [[..."7 8 9 "].concat("10"), [..." 4 5 6 "], [..."  2 3  "], [..."   1   "]].reverse();
  let cursor = 0;
  arr.sort( (a, b) => a-b );
  
  for(let i=0; i<bowlingPin.length; i++) {
    for(let j=0; j<bowlingPin[i].length; j++) {
      if(bowlingPin[i][j] === " ")
        continue;
      else if(bowlingPin[i][j] == arr[cursor]) {
        bowlingPin[i][j] = " ";
        cursor++;
      } else 
        bowlingPin[i][j] = "I";
    }
    
    bowlingPin[i] = bowlingPin[i].join``;
  }
  
  return bowlingPin.reverse().join`\n`;
}