function capitalize(s){
  return [...s].reduce( (arr, v, i) => {
    if( i%2 === 0 ) {
      arr[0].push(v.toUpperCase());
      arr[1].push(v);
    } else {
      arr[0].push(v);
      arr[1].push(v.toUpperCase());
    }
    
    return arr;
  }, [[], []]).map( arr => arr.join`` );
};