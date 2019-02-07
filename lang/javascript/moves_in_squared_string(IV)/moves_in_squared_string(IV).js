// #1
function diag2Sym(strng) {
  let arr = [];
  let last = strng[0].length -1;
  let sz = last;
  
  for(let i=0; i<strng[0].length; i++) {
    let str = "";
    for(let j=0; j<strng.length; j++) 
      str += strng[sz-j][last];
    arr.push(str);
    last--;
  }
  return arr.join("\n");
}
function rot90Counter(strng) {
  let arr = [];
  let last = strng[0].length -1;
  
  for(let i=0; i<strng[0].length; i++) {
    let str = "";
    for(let j=0; j<strng.length; j++)
      str += strng[j][last];
    arr.push(str);
    last--;
  }
  return arr.join("\n");  
}
function selfieDiag2Counterclock(strng) {
  let arr = [];
  let diag = diag2Sym(strng).split("\n"), rot = rot90Counter(strng).split("\n");
      
  return strng.reduce( (arr, v, i) => {
    arr.push( [ v, diag[i], rot[i] ].join("|") )
    return arr;
  }, []).join("\n");
}
function oper(fct, s) {
    return fct(s.split("\n"));
}


// #2
function diag2Sym(strng) {  
  return make(strng, strng[0].length-1, strng.length, (org, v, i, loop, last, sz) => {
    for(let j=0; j<loop; j++) 
      v += org[sz-j][last];
    return v;
  }).retrieve(arguments[1]); 
}

function rot90Counter(strng) {
  return make(strng, strng[0].length-1, strng.length, (org, v, i, loop, last) => {
    for(let j=0; j<loop; j++)
      v += org[j][last];
    return v;
  }).retrieve(arguments[1]);
}

function selfieDiag2Counterclock(strng) {
  let diag = diag2Sym(strng, true), rot = rot90Counter(strng, true);
      
  return strng.reduce( (arr, v, i) => {
    arr.push( [ v, diag[i], rot[i] ].join("|") );
    return arr;
  }, []).join("\n");
}

function oper(fct, s) {
    return fct(s.split("\n"));
}

function make(strng, out_loop, in_loop, opr) {
  let arr = [];
    
  for(let i=0; i<out_loop+1; i++)
    arr.push( opr(strng, "", i, in_loop, out_loop-i, out_loop) );
  
  return arr;
}

Array.prototype.retrieve = function(v) {
  return (!v ? this.join("\n") : this);
}