const chordList = {
  'Am' : ['0','1','2','2','0','-'],
  'C'  : ['0','1','0','2','3','-'],
  'D'  : ['2','3','2','0','-','-'],
  'G'  : ['3','0','0','0','2','3']
};

const turnChordsIntoTab = (chords) => {
  var result = [
    ['e|'],
    ['B|'],
    ['G|'],
    ['D|'],
    ['A|'],
    ['E|'],
  ], footer = ['  '];
  
  let spaceCnt = 0;
  
  for(let chord of chords.split(" ")) {
    for(let i=0; i<6; i++)
      result[i].push("---" + chordList[chord][i])
        
    footer.push(" ".repeat(3-spaceCnt)+chord);
    
    if(chord === 'Am')
      spaceCnt = 1;
    else 
      spaceCnt = 0;
  }
  
  return result.reduce( (tarr, arr, i) => {
            arr.push("---|\n");
            tarr.push(arr.join``);
            return tarr;
          }, []).concat(footer).join``;
}