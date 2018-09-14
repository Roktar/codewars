function timedReading(maxLength, text) {
    let arr = text.split(" ");
    let resArr = [];
  
    for(let i in arr) {
      c(arr, i, ",", "\'", ".", "?", "!");
      if(arr[i] && arr[i].length <= maxLength)
        resArr.push(arr[i]);
    }
    return resArr.length;
  }
  
  function c(arr, i, ...splitChars) {
    for(let ch of splitChars) {
      if(arr[i].includes(ch)) {
        let s = arr[i].split(ch);
        arr[i] = s[0] || s[1];
      }
    }
  }