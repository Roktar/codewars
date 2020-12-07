const divs = Array.from({length:20}).reduce( (arr, v, i) => {
      arr.push( 10**i%13 );
      return arr;
    }, []);

// #1
function thirt(n) {
   return getValue([...n.toString()].reverse().reduce( (obj, v, i) => { 
     obj.value += +v * obj.divs[i];
     return obj;
     }, {divs: divs.slice(0, n), value: 0, prev: 0}));
}

 function getValue(obj) {
   let val = [...obj.value.toString()].reverse().reduce( (t, v, i) => t += +v*obj.divs[i], 0);
  
   if(val == obj.prev) 
     return val;
   else {
     (obj.prev = val) && (obj.value = val);
     return getValue(obj);
   }
 }
// -----------------------------------------------------------------------
 // #2
function thirt(n) {
  let v = [...n.toString()].reverse().reduce( (t, v, i) => t += +v*divs[i], 0);
  
  if(!arguments[1])
    return thirt(v, v);
  else {
    if(v == arguments[1])
      return v;
    else
      return thirt(v, v);
  }
}
// -----------------------------------------------------------------------
// #3 (#2 축소)
function thirt(n) {
  let v = [...n.toString()].reverse().reduce( (t, v, i) => t += +v*divs[i], 0);
  
  if(v === arguments[1])
    return v;
  else
    return thirt(v, v);
}