const catchSignChange = arr => {
  if(!arr.length)
    return 0;
  
  const valid = (v, c=0) => v >= c;
  let flag = valid(arr.shift());
  
  return arr.reduce( (c, v, i) => {
    if( flag != valid(v)) {
      c++;
      flag = !flag;
    }
    return c;
  }, 0);
};
