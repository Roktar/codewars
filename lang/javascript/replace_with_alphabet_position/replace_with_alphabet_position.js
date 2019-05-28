function alphabetPosition(text) {
  // return preprocessor([...text.toLowerCase()], getDictionary()).run();
  // return new processor([...text.toLowerCase()], getDictionary()).run();
  return new processor2().setValue("array", [...text.toLowerCase()]).setValue("dictionary", getDictionary()).run(["array", "dictionary"]);
}

// #1 
function preprocessor(array, dictionary) {
   let obj = {};
   obj.run = function() {
     return array.reduce( (arr, v, i) => {
       if(dictionary[v])
         arr.push(dictionary[v]);
       return arr;
     }, []).join(" ");
   }
   return obj;
}

// #2
function processor(array, dictionary) {
  this.run = function() {
     return array.reduce( (arr, v, i) => {
       if(dictionary[v])
         arr.push(dictionary[v]);
       return arr;
     }, []).join(" ");
  }
}

// #3
function processor2() {
  this.setValue = function(k, v) {
    this[k] = v;
    return this;
  }
  
  this.run = function(validList) {
    if( !validList.every( v => !!this[v] ) )
      return;
    
     return this["array"].reduce( (arr, v, i) => {
         arr.push(this["dictionary"][v] || '');
       return arr;
     }, []).filter( v => v != '').join(" ");
  }
}


function getDictionary() {
  let arr = {};
  
  for(let i=0; i<26; i++)
    arr[String.fromCharCode(97+i)] = (i+1);
  
  return arr;
}