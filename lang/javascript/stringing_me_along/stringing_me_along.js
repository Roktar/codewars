function createMessage() {
  if(arguments.length != createMessage.cnt) {
    createMessage.cnt++;
    return createMessage.bind(null, ...arguments);
  }
  
  createMessage.cnt = 0;
  return createMessage.makeText(arguments);
}

createMessage.makeText = function(args) {
  let arr = [];
  
  for(let v of args) 
    arr.push(v)
  
  return arr.join(" ");
}

createMessage.cnt = 0;