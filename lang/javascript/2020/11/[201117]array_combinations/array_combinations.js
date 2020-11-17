function solve(arr) {
  return arr.map( arr => new Set(arr).size ).reduce( (t, v) => t*=v );
};