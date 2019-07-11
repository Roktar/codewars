function disariumNumber(n){
  return [...n.toString()].reduce( (t, v, i) => t += Math.pow(parseInt(v), i+1), 0) === n ? "Disarium !!" : "Not !!";
}