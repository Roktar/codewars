function wave(str){
  let arr = [];
  
  for(let i=0; i<str.length; i++)
    !(str[i] !== " ") || arr.push(str.capitalize(i));
  
  return arr;
}

String.prototype.capitalize = function(index) {
  /* return [...this].reduce( (strs, s, i) => {
    if(index === i)
      s = s.toUpperCase();
    strs += s;
    return strs;
  }, "");*/

  return this.substring(0, index) + this[index].toUpperCase() + this.substring(index+1);
}