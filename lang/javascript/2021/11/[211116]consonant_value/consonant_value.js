function solve(s) {
  return s.split(/[a|e|i|o|u]/g).map( v => [...v||' '].reduce( (t, v) => t+=v.charCodeAt(0)-96, 0)).sort( (a, b) => b-a )[0];
};