function hexWordSum( string ){
  if(string.length < 2)
    return 0;
  
  return string.split(" ").reduce( (tot, v, i) => {
    v = (v.replace(/S/gi, '5').replace(/O/gi, '0').match(/^[A-F0-9]+$/gi) || []).join("");
    tot += parseInt(v, 16) || 0;
    return tot;
  }, 0);
}
