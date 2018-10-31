"use strict";

class ArrayParser  {
  constructor() {
    this.parsed_arr = [];
  }
    
  convert(v) {
    if(!check(v, 48, 57))
      return parseInt(v);
    if(!checkValue(v, 97, 122) || !checkValue(v, 65, 90))
      return v;
  }

  parse(strs) {
    let stack = [];
    let cont_arr = [];
    let stack_idx = -1;
    let txt_arr = [...strs];
    txt_arr.shift(); // delete left [
    txt_arr.pop(); // delete right ]

    for(let i=0; i<txt_arr.length; i++) {   
      if(txt_arr[i] === " " || txt_arr[i] === ",")
        continue;
      else if(txt_arr[i] === "[") {
        if(stack_idx > 0)
          cont_arr[stack[stack_idx-1]].push([]);
        else
          cont_arr.push([]);
        stack.push(cont_arr.length-1);
        stack_idx++;
      } else if(txt_arr[i] === "]") {
        if( stack_idx > 0 ) {
          cont_arr[stack[stack_idx-1]].push(cont_arr[stack[stack_idx]]);
          cont_arr.pop();
          stack.pop();
        }        
        stack_idx--;  
        continue;
      } else if(stack_idx > -1)
        cont_arr[stack[stack_idx]].push(this.convert(txt_arr[i]));
      else
        cont_arr.push(this.convert(txt_arr[i]));
    }
    this.parsed_arr = cont_arr;
    return this;
  }
  
  getParsedArray() {
    return this.parsed_arr;
  }
}

function parseArray(s){
  if(!s.length)
    return [];
  
  if(!check(s))
    return null;
  
  let parsed_arr = new ArrayParser();
  return parsed_arr.parse(s).getParsedArray();
}

function check(s) {
  if(!s.includes("[") || !s.includes("]") )
    return false;
  if( !checkValue(s, 48, 57) && !checkValue(s, 97, 122) && !checkValue(s, 65, 90) )
    return false;
  return true;
}

function checkValue(s, start, end) {
  for(let i=0; i<s.length; i++) {
    if( s[i] === "[" || s[i] === "]" || s[i] === " " )
      continue;
    let base = s.charCodeAt(i);
    if( !(base >= start) && !(base <= end) )
      return false;
  }
  return true;
}