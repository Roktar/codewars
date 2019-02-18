function revOrderMark(address) {
  let arr = address.split("-");
  
  if(arr.length != 6)
    return "00-00-00-00-00-00";
  return arr.map( (v, i) => coverZero(parseInt([...fillZero(toDecimal(v).toString(2), 8)].reverse().join(""),2).toString(16).replace(/[a-z]/gi, v => v.toUpperCase()))).join("-");
 }
 
 function toDecimal(v) {
   return parseInt((replaceValue(v[0]) * 16)) + parseInt(replaceValue(v[1]));
 }
 
 function replaceValue(v) {
   return { 'A' : 10, 'B' : 11, 'C' : 12, 'D' : 13, 'E' : 14, 'F' : 15 }[v] || v;
   
 //   switch(v) {
 //     case 'A' || 'a' : return 10;
 //     case 'B' || 'b' : return 11;
 //     case 'C' || 'c' : return 12;
 //     case 'D' || 'd' : return 13;
 //     case 'E' || 'e' : return 14;
 //     case 'F' || 'f' : return 15;
 //     default : return v;
 //   }
 }
 
 function fillZero(v, bit) {
   return new Array(bit - v.length).fill('0').join("") + v;
 }
 
 function coverZero(v) {
   return (v.length != 2 ? "0" + v : v);
 }
 