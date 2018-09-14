function timedReading(maxLength, text) {
    let arr = text.split(" ");
    
    return arr.filter( (v, i) => c(arr, i, ",", "\'", ".", "?", "!") || (arr[i] && arr[i].length <= maxLength) ).length;
  }
  
function c(arr, i, ...splitChars) {
  for(let ch of splitChars) {
    if(arr[i].includes(ch)) {
      let s = arr[i].split(ch);
      arr[i] = s[0] || s[1];
    }
  }
}