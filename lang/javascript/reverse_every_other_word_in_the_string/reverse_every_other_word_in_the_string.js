function reverse(str){
  if(!/[A-Za-z0-9]+/g.test(str))
    return '';
    
  return str.split(" ").reduce( (arr, v, i) => {
    if( (i%2) === 1 )
      v = v.split("").reverse().join("");
    arr.push(v);
    return arr;
  }, []).join(" ");
}