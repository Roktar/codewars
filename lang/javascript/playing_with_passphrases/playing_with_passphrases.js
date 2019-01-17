function playPass(s, n) {
  let alphabets = {};
  
  makeAlphabets(alphabets, 65, n);
  makeAlphabets(alphabets, 97, n);
  
  return [...s].map( (v, i) => {
     let ascii = v.charCodeAt(0);
     if(ascii >= 48 && ascii <= 57)
       return 9 - parseInt(v);
     else if( (ascii >= 65 && ascii <= 91) || (ascii >= 97 && ascii <= 123) )
       return ((i%2) ?  alphabets[ascii].toLowerCase() : alphabets[ascii])
     else
       return v;
   }).reverse().join("");
}

function makeAlphabets(obj, start, n) {
  let end = start + 26;
  for(let i=0; i<26; i++) {
    let code = (start+i+n);
    obj[ start+i ] = String.fromCharCode( ( code >= end ? (code-26) : code) );
  }
}