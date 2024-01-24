function rot13(message){
  let result = [];
  
  for(let s of message) {
    let asciiValue = s.charCodeAt(0);
    
    if(asciiValue >= 65 && asciiValue <= 90) result.push(String.fromCharCode(65+((s.charCodeAt(0)+13-65)%26)));
    else if(asciiValue >= 97 && asciiValue <= 122) result.push(String.fromCharCode(97+((s.charCodeAt(0)+13-97)%26)));
    else result.push(s);
  }
  
  return result.join``;
}