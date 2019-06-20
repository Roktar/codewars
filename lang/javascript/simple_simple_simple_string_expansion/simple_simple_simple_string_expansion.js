const NUMBER = "NUMBER";
const ALPHABET = "ALPHABET";

function stringExpansion(s) {  
  if(!valid(s, NUMBER))
    return s;
  if(!valid(s, ALPHABET))
    return '';
  return makeNewWord(s);
}

function valid(s, type) {
  if(type === NUMBER)
    return /[0-9]/g.test(s);
  else if(type === ALPHABET)
    return /[a-zA-z]/g.test(s);
  
  return false;
}

function makeNewWord(s) {
  let arr = s.match(/[0-9]?[a-zA-z]+/g);
  let newWord = "";
  
  for(let v of arr) {
    if(!valid(v, NUMBER)) {
      newWord += v;
      continue;
    }
    
    let cnt = parseInt(v.substr(0, 1));
    let sub = v.substr(1);
    
    if(sub.length > 1)
      newWord += [...sub].repeat("repeat", cnt)
    else
      newWord += sub.repeat(cnt);
  }
  return newWord;
}

Array.prototype.repeat = function(funcName) {
  return this.reduce( (t, v, i) => t += v[funcName](Array.prototype.slice.call(arguments).splice(1)), "");
}

String.prototype.repeat = function(cnt) {
  let val = "";
  for(let i=0; i<cnt; i++)
    val += this;
  return val;
}