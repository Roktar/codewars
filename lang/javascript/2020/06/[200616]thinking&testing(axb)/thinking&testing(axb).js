function testIt(a,b){
  if(a < 10 && b < 10)
    return a*b;
  else
    return [...a.toString()].reduce( (t, v) => t+(+v), 0) * [...b.toString()].reduce( (t, v) => t+(+v), 0)
}