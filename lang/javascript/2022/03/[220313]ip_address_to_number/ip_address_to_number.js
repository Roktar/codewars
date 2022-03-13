function ipToNum(ip) {
  return parseInt(ip.split`.`.map( v => (+v).toString(2).padStart(8, '0') ).join``, 2);
}

function numToIp(num) {
  let v = (num).toString(2).padStart(32, '0');
  let arr = [];
  
  for(let i=0; i<4; i++)
    arr.push( v.slice(i*8, i*8+8) );
    
  return arr.map( v => parseInt(v, 2) ).join`.`;
}