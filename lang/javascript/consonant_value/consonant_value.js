function solve(s) {    
  if( s.length === 0 )
    return "";
  return s.replace(/[a|e|i|o|u]+/gi, " ").split(" ").reduce( (obj, v, i) => {
    let value = obj.calculate(v, obj.scoreBoard);
    
    if(value > obj.max)
      obj.max = value;
    
    return obj;
  }, { max: Number.MIN_VALUE, calculate: calculateValue, scoreBoard: getScoreBoard() } ).max;
};

function calculateValue(str, scoreBoard) {
  if(str.length === 1)
    return scoreBoard[str];
  else
    return [...str].reduce( (t, v, i) => t += scoreBoard[v], 0);
}

function getScoreBoard() {
  return [...'abcdefghijklmnopqrstuvwxyz'].reduce( (obj, v, i) =>  {
    obj[v] = (i+1);
    return obj;
  }, {});
}