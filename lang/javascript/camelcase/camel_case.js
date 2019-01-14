String.prototype.camelCase=function(){
  return ( !this.length ? "" : this.split(" ").map( (v, i) => (v.substring(0, 1).toUpperCase() + v.substring(1))).join("").replace(/ +/g, '')); 
}