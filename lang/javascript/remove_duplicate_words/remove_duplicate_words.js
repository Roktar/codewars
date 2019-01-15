function removeDuplicateWords (s) {
  return new Set(s.split(" ")).reduce( (arr, obj) => {
    arr.push(obj);
    return arr;
  }, []).join(" ");
}

Set.prototype.reduce = function(func, arr) {
  this.forEach( (v) => func(arr, v) );
  return arr;
}