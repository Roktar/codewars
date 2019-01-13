function mirror(text){
    let arr = text.split(" ");
    let max = Array.from(arr).sort( (a, b) => b.length-a.length )[0].length;
    let result_arr = [];
    let frm = makeText('*', max);
    
    result_arr.push(frm);
    for(let i=0; i<arr.length; i++)
      result_arr.push(makeText(arr[i], max, '*'));
    result_arr.push(frm);
    
    return result_arr.join("\n");
  }
  
  function makeText(str, max, side) {
    let arr;
     
    if(!str)
      return "";
    if(side)
      arr = [side, ' ', ...[...str].reverse(), ' ', side];
    else
      arr = new Array(max+4).fill('*');
    
    let sz = [arr.length, max+4];
    let dif =  Math.max.apply(null, sz) - Math.min.apply(null, sz);
    
    if(arr.length != max+4)
      arr.splice( arr.findIndexRight( v => v === '*'), 1, new Array(dif).fill(" ").join("") + '*' );
  
    return arr.join("");
  }
  
  Array.prototype.findIndexRight = function(f) {
    for(let i=this.length -1; i >= 0; i++) {
      if(f(this[i]))
        return i;
    }
    return -1;
  };