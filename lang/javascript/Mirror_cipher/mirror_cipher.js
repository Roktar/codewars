function mirror(code){
  let arg_arr = Array.prototype.slice.call(arguments); 
  let alphabets = [];
  
  for(let i=0; i<26; i++)
    alphabets.push( String.fromCharCode(122-i) );
      
  if(arg_arr.length > 1) {
    if(arg_arr[1].length < 1)
      return arg_arr[0];
    let mirror = {};
    let length = Math.max.apply(null, [arg_arr[0].length, arg_arr[1].length]);
    let new_arr = [];
    arg_arr[0] = toLower(arg_arr[0]);
    for(let i=0; i<arg_arr[1].length; i++)
      mirror[arg_arr[1][i]] = arg_arr[1][arg_arr[1].length-(i+1)];
    
    for(let i=0; i<length; i++)
      new_arr.push( mirror[arg_arr[0][i]] || arg_arr[0][i] );
    
    return new_arr.join("");
  } else
    return rev(code, alphabets).join("");
}

function rev(strs, alphabets) {
  return [...strs].reduce( (arr, v, i) => {
      arr.push( v === " " ? " " : alphabets[v.toLowerCase().charCodeAt(0) - 97] || v );
      return arr;
    }, []);
}

function toLower(strs) {
  return [...strs].reduce( (strs, s, i) => {
    strs += s.toLowerCase();
    return strs;
  }, "");
}