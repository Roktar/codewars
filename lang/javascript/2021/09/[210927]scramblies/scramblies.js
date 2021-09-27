function scramble(str1, str2) { 
  let counts = [...str1].reduce( (obj, v) => {
    if(!obj[v])
      obj[v] = 0;
    obj[v]++;
    return obj;
  }, {});

  return [...str2].every( v => (!counts[v] ? false : counts[v]--) );  
}