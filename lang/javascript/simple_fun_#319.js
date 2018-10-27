function numberAndIPaddress(s){
    if(s.includes("."))
      return getValue(s);
    else
      return getAddress(s);
  }
  
  function getValue(s) {
      let arr = [];
      
      s.split(".").forEach( (v, i) => arr.push(parseInt(v).toString(2))); // 2진수로 변환
      arr.forEach( (v, i) => {
        if(v.length < 8) {
          let dif = 8 - v.length;
          let substr = "";
          while(dif != 0) {
            substr += "0";
            dif--;
          }
          arr[i] = substr + v;
        }
      }); // 앞에 누락된 0을 채우기
      return getDecimal(arr, true);
  } // ip주소를 10진수로 바꾸는 함수
  
  function getAddress(arr) {
    let bin_arr = splitArray(reverseString(getBinary(arr, 32)), 8, 32);
    let new_arr = [];
    
    for(let i=0; i<bin_arr.length; i++)
      new_arr.push(getDecimal(bin_arr[i], true));
      
    return new_arr.join(".");
  } // 10진수를 ip주소로 바꾸는 함수
  
  function getDecimal(arr, is_rev) {
    let rev = (is_rev ? reverseString(arr) : arr);
    let v = 0, m = 1;
      
    for(let i=0; i<rev.length; i++) {
      if( rev[i] == "1" )
        v += m;
      m *= 2;
    }
  
    return v.toString();
  } // 2진수를 10진수로 변환
  
  function getBinary(v, bits) {
    let arr = [];
    
    for(let i=0; i<bits; i++) {
      arr.push(v%2); 
      v = parseInt(v/2);
    }
    
    return arr;
  } // 10진수를 2진수로 변환
  
  function splitArray(origin, size, last) {
    let new_arr = [];
    let now_idx = 0;
    
    while(now_idx < last) {
      let a = origin.substr(now_idx, size);
      new_arr.push(a);
      now_idx += size;
    }
    return new_arr;
  } //  길이 32의 문자열을 8개씩 끊어 크기 4의 배열로 반환
  
  function reverseString(arr) {
    let str = "";
    let strs = (typeof arr === "string" ? arr : arr.join(""));
    
    for(let i=strs.length-1; i>-1; i--)
      str += strs[i];
      
    return str;
  } // 계산을 편하게하기위해 문자열 뒤집기