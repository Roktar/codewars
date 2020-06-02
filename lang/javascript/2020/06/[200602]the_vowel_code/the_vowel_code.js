function encode(string) {
  return string.replace(/[a|e|i|o|u]/g, v => "aeiou".indexOf(v)+1 );
}

function decode(string) {
  return string.replace(/[1|2|3|4|5]/g, v => [..."aeiou"][+v-1] );
}