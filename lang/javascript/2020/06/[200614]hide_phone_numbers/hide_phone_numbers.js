function encryptNum(number) {  
  let encNumber = number.match(/[?=\+]*[\d]+/g);
  if(!encNumber[0].startsWith("+39") && !encNumber[0].startsWith("0039") && !encNumber[0].startsWith('1') || encNumber[0].substr(0, 2) === '11')
    return false;
  
  let last = encNumber.length-1, n = 0;
  let seperator = number.match(/[^\d]/g);
  
  if(seperator && seperator.length > 1)
    seperator = seperator[seperator.length-1];
  
  while(true) {
    if(encNumber[last].length > 6) {
      encNumber[last] = encNumber[last].substr(0, encNumber[last].length-6) + 'XXXXXX';
      break;
    } else if((encNumber[last].length+n) != 6) {
      encNumber[last] = (!n? 'X'.repeat(encNumber[last].length):encNumber[last].substr(0, encNumber[last].length-n) + 'X'.repeat(n));
      n = 6-encNumber[last].length;
      last--;
    } else 
        break;
  }
  
   return encNumber.join(seperator);
 }