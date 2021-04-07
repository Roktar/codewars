function insideOut(x){
  return x.split` `.map( v => {
    if(v.length < 4)
      return v;
    else {
      let m =  parseInt(v.length/2);
      
      return ( v.length%2 == 1 ? [...v.substring(0, m)].reverse().join`` + v.charAt(m) + [...v.substring(m+1)].reverse().join``
                               : [...v.substring(0, m)].reverse().join`` + [...v.substring(m)].reverse().join``); 
    }
  }).join` `;
}