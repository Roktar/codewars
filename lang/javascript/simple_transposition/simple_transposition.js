function simpleTransposition(text) {
  let m = Math.round(text.length/2)+1;
  let c = 1;
  let orgn_arr = [...text];
  let arr = [];
  
  while( m-- > 1 )
    arr.push(orgn_arr.splice(c++, 1) );
  
  return orgn_arr.concat(arr).join("");
}
