function narcissistic(value) {
  return [...value.toString()].reduce( (t, v, i, o) => t += Math.pow(parseInt(v), o.length), 0 ) === value;
}
