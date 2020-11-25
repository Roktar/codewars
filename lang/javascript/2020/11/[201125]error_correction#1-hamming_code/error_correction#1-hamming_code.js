function encode(text) {
  return [...text].map( v => [...(v.charCodeAt(0)).toString(2).padStart(8, '0')].reduce( (s, v) => s+=v.repeat(3), "") ).join``;
}

function decode(bits) {
  let codes = bits.match(/\d{3}/g).map( v => ![0,1,2,4].includes(parseInt(v, 2)) ? '1' : '0' );
  let chArr = [];
  
  for(let i=0; i<(codes.length/8); i++)
    chArr.push( String.fromCharCode(parseInt(codes.slice(i*8, (i+1)*8).join``, 2)) );  
  
  return chArr.join``;
}