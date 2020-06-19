function truthTable (booleanFunction) {
  let result = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].slice(0, booleanFunction.length).join(" ") 
               + "".padStart(2, "\t") 
               + (booleanFunction.name || 'f') + booleanFunction.toString().replace('\n', '').match(/\(.+\)./)[0].replace(/ /g, '')
               + '\n'.repeat(2);
  
  return result + range(0, 2**booleanFunction.length).apply( (v, i, o) => {
     let arr = [...(i).toString(2).padStart(booleanFunction.length, '0')].map( v => +v);
     return arr.join(" ") + "\t\t" + (booleanFunction(...arr) ? 1 : 0);
  }).done( arr => arr.slice(0, arr.length).join("\n") );
}

function range(start, end) {
  let arr = new Array(end).fill(0);
  
  return {
    apply: function(cb) {
      arr.forEach( (v, i, o) => o[i] = cb(v, i, o) );
      return this;
    },
    done: function(cb) {
      return cb(arr);
    }
  }
}