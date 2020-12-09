var uniqueInOrder=function(iterable){
  return [...iterable].reduce( (arr, v) => {
    if(arr[arr.length-1] !== v)
      arr.push(v);
    return arr;
  }, []);
}