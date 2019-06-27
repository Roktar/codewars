// #1
function parityBit(binary) {
  return process( (bin, target) => [...bin].reduce( (t, v, i) => (v===target ? t+1 : t), 0))(binary, "1");
}

function process(valid) {
  return function(binary, tg) {
    return binary.split(" ").reduce( (tArr, v, i) => {    
      if( (valid(v, tg)%2) )
        v = "error-";
      tArr.push(v.substring(0, v.length-1));
      return tArr;
    }, []).join(" ");
  };
}

// #2
function parityBit(binary) {
  return process( (bin, target) => [...bin].reduce( (t, v, i) => (v===target ? t+1 : t), 0)).run(binary, "1");
}

function process(valid) {
  return {
    run : function(binary, tg) {
      return binary.split(" ").reduce( (tArr, v, i) => {    
        if( (valid(v, tg)%2) )
          v = "error-";
        tArr.push(v.substring(0, v.length-1));
        return tArr;
      }, []).join(" ");
    }
  };
}

//#3
function parityBit(binary) {
  let binArr = binary.split(" ");
  let iterArr = generator(binArr, "1");
  let resArr = [];
 
  for(let i=0; i<binArr.length; i++)
    resArr.push(iterArr.next().value);
  return resArr.join(" ");
}

function* generator(arr, tg) {
  let count = (bin, target) => [...bin].reduce( (t, v, i) => (v===target ? t+1 : t), 0);
  
  for(let i=0; i<arr.length; i++) {
    if(count(arr[i], tg) % 2)
      arr[i] = "error-";
    yield arr[i].substring(0, arr[i].length-1);
  }
};