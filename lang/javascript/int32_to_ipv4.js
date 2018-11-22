function int32ToIp(int32){
    let sep = 8;
    let count = 4;
    
    return getIPValue(int32.toString(2), sep, count).join('.');
  }
  
  function getIPValue(v, seperator, count) {
    let arr = [];
    for(let i=0; i<count; i++)
      arr.push(convertValue(splitArray(i*seperator, v, seperator), seperator));
    return arr;
  }
  
  function splitArray(s, v, len) {
    return v.substr(s, len);
  }
  
  function convertValue(v, b) {
    let obj = {
        value : 0,
        mul : 1,
        is : function(v, func) {
          if(func(v))
            this.add(v);
          this.mul *= 2;
          return this;
        },
        add : function(v) {
          this.value += this.mul;
        }
    }
    return [...v].reverse().reduce( (t, v, i) => t.is(v, v=>v==="1"), obj ).value;
  }