function encodeRailFenceCipher(string, numberRails) {
  let codes = [];
  let dir = -1;
  let room = 0;
  
  for(let i=0; i<numberRails; i++)
    codes[i] = [];
  
  for(let i=0; i<string.length; i++) {
    if(i%(numberRails-1) == 0)
      dir *= -1;
    
    codes[room].push(string[i]);
    room += dir;
   }  
    let str = "";
    
    for(let i=0; i<codes.length; i++)
      str += codes[i].join("");
    return str;
}