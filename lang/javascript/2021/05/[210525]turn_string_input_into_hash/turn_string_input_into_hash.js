function strToHash(str){
  return JSON.parse( `\{${str}\}`.replace(/(\w+)=([0-9])/g, '\"$1\":$2'));
}