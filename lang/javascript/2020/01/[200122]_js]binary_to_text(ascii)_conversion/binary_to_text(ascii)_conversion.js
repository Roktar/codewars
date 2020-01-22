function binaryToString(binary) {
  let result = [];
  
  for(let i=0; i<(binary.length/8); i++)
    result.push(String.fromCharCode(parseInt(binary.substr(i*8, 8), 2)));
  
  return result.join("");
}