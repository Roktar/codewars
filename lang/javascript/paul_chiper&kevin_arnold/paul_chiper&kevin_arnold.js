// #1
const convert_table = getConvertTable();

function encode(input) {
  if(!input)
    return '';

  let arr = [...input.replace(/[a-z]/g, v => v.toUpperCase())];
  let result = [];
  
  if( arr.findIndex( (v, i) => !(v >= 'A' && v <= 'Z') ) === 0 )
    result = arr.splice(0, arr.findIndex( (v, i) => v >= 'A' && v <= 'Z') );
  result.push(arr[0]);
  
  return result.concat( arr.reduce( (obj, v, i) => {
    if( !( v >= 'A' && v <= 'Z') ) {
      obj.arr.push(v);
      if(obj.idx === -1)
        obj.idx = i-1;
      return obj;
    }
    
     if(obj.idx === -1)
      obj.arr.push( convert_table.itoc[ (convert_table.ctoi[arr[i-1]] + convert_table.ctoi[v])%26 ] );
     else {
      obj.arr.push( convert_table.itoc[ (convert_table.ctoi[arr[obj.idx]] + convert_table.ctoi[v])%26 ] );
      obj.idx = -1;
     }
    
    return obj;    
  }, { arr : [], idx : -1 }).arr).join("").replace(/ +/g, " ");
}

function decode(input) {
  if(!input)
    return '';
    
  let arr = [...input.replace(/[a-z]/g, v => v.toUpperCase())];
  let result = [];
  
  if( arr.findIndex( (v, i) => !(v >= 'A' && v <= 'Z') ) === 0 )
    result = arr.splice(0, arr.findIndex( (v, i) => v >= 'A' && v <= 'Z') );
  result.push(arr[0]);
  
  return result.splice(0, result.length-1).concat(arr.splice(1).reduce( (obj, v, i) => {
      if( !( v >= 'A' && v <= 'Z') ) {
        obj.arr.push(v);
        if(obj.idx === -1)
          obj.idx = i;
        return obj;
      }
      
       if(obj.idx === -1)
        obj.arr.push( convert_table.itoc[ ( (convert_table.ctoi[v] + 26) - convert_table.ctoi[obj.arr[i]] )%26 ] );
       else {
        obj.arr.push( convert_table.itoc[  ( (convert_table.ctoi[v] + 26) - convert_table.ctoi[obj.arr[obj.idx]])%26 ] );
        obj.idx = -1;
       }
          
      return obj;    
    }, { arr : [ arr[0] ], idx : -1 }).arr).join("");
}

function getConvertTable() {
  let obj = {
    ctoi : {},
    itoc : {}
  };
  
  for(let i = 0; i<26; i++)
    obj.ctoi[String.fromCharCode(65+i)] = (i+1);
  for(let i = 0; i<26; i++)
    obj.itoc[(i+1)] = String.fromCharCode(65+i);
  obj.itoc[0] = 'Z';
    
  return obj;
}


// #2
const convert_table = getConvertTable();

function encode(input) {
  if(!input)
    return '';
  
  let process = prepare(input);
  
  return process(
    function(arr, result) {
      return result.concat( arr.reduce( (obj, v, i) => {
        if( !( v >= 'A' && v <= 'Z') ) {
          obj.arr.push(v);
          if(obj.idx === -1)
            obj.idx = i-1;
          return obj;
        }
        
         if(obj.idx === -1)
          obj.arr.push( convert_table.itoc[ (convert_table.ctoi[arr[i-1]] + convert_table.ctoi[v])%26 ] );
         else {
          obj.arr.push( convert_table.itoc[ (convert_table.ctoi[arr[obj.idx]] + convert_table.ctoi[v])%26 ] );
          obj.idx = -1;
         }
        
        return obj;    
      }, { arr : [], idx : -1 }).arr).join("").replace(/ +/g, " ");
    }
  );
}

function decode(input) {
  if(!input)
    return '';
    
  let process = prepare(input);
  
  return process(
    function(arr, result) {
      return result.splice(0, result.length-1).concat(arr.splice(1).reduce( (obj, v, i) => {
        if( !( v >= 'A' && v <= 'Z') ) {
          obj.arr.push(v);
          if(obj.idx === -1)
            obj.idx = i;
          return obj;
        }
              
         if(obj.idx === -1)
          obj.arr.push( convert_table.itoc[ ( (convert_table.ctoi[v] + 26) - convert_table.ctoi[obj.arr[i]] )%26 ] );
         else {
          obj.arr.push( convert_table.itoc[  ( (convert_table.ctoi[v] + 26) - convert_table.ctoi[obj.arr[obj.idx]])%26 ] );
          obj.idx = -1;
         }
            
        return obj;    
      }, { arr : [ arr[0] ], idx : -1 }).arr).join("");
    }
  );
}

function prepare(input) {
  let arr = [...input.replace(/[a-z]/g, v => v.toUpperCase())];
  let result = [];
  
  if( arr.findIndex( (v, i) => !(v >= 'A' && v <= 'Z') ) === 0 )
    result = arr.splice(0, arr.findIndex( (v, i) => v >= 'A' && v <= 'Z') );
  result.push(arr[0]);
  
  return function(func) {
    return func(arr, result);
  }
}

function getConvertTable() {
  let obj = {
    ctoi : {},
    itoc : {}
  };
  
  for(let i = 0; i<26; i++)
    obj.ctoi[String.fromCharCode(65+i)] = (i+1);
  for(let i = 0; i<26; i++)
    obj.itoc[(i+1)] = String.fromCharCode(65+i);
  obj.itoc[0] = 'Z';
    
  return obj;
}
