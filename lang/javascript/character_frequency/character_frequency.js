function letterFrequency(text){
  let strs = (text.match(/[a-z]/gi) || []).join("").toLowerCase();
  let nullObject = {length:0};
  let result = [].range(0, 25).apply( (v, i, arr) => arr.push( String.fromCharCode(97+i) ) ).done( arr => arr ).reduce( (arr, v, i) => {
    let length = (strs.match( new RegExp(v, "g") ) || nullObject).length;
    if(length > 0)
      arr.push( [v, length] );
    return arr;
  }, []);
  
  sort(result);

  return result;
}

function sort(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      if(arr[i][1] > arr[j][1] || (arr[i][1] === arr[j][1] && arr[i][0].charCodeAt(0) < arr[j][0].charCodeAt(0)) ) {
        let tmp = null;
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

Array.prototype.range = function(start, end) {
  if( start > end )
    throw new Error("start is greater than end");
  if(!end) {
    end = start;
    start = 0;
  }

  let that = this;

  return {
    apply: function(func) {
      for(let i=start; i<=end; i++)
        func(that[i], i, that);
      return this;
    },
    done: function(func) {
      return func(that);
    }
  }
}