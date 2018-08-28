function numericals(s){  
  //let arrays = getNumericals(s, []);
//   let freq = [];
//   let retArr = [];
//   let sz = s.length;
  
//   for( let i = 0; i<sz; i++ ) {
//     if(freq[s[i]] == undefined)
//       freq[s[i]] = 0;
//     retArr.push(++freq[s[i]]);  
//   }
  
  return getNumericals(s, []);
}

function getNumericals(strs, freq) {
  return [...strs].reduce( (str, item, i) => {      
    if(freq[item] == undefined)
      freq[item] = 0;
    str += (++freq[item]);
    return str;
  }, "");
}