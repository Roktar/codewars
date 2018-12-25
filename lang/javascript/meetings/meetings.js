function meeting(s) {
    return s.split(";").reduce( (arr, v, i) => {
      arr.push( v.toUpperCase().split(":").swap(0, 1) );
      return arr;
    }, []).sort().reduce( (strs, arr, i) => {
      strs += "(" + arr[0] + ", " + arr[1] + ")";
      return strs;
    }, "");
}

Array.prototype.swap = function(start, end) {
  this[start] = this.splice( end, 1, this[start] )[0];
  return this;
}