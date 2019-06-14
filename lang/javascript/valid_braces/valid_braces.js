class Validator {
  constructor(func) {
    if(func)
      func.bind(this).call();
  }
  
  push(v) {
    this.openerStack.push(v);
  }
  
  pop(v) {
    if(this.valid(v, this.peek())) {
      this.openerStack.pop();
      return true;
    } else
      return false;
  }
  
  peek() {
    return this.openerStack[this.openerStack.length-1];
  }
  
  isEmpty() {
    return this.openerStack.length <= 0;
  }
  
  valid(v, opener) {
    return opener === this.closerList[v];
  }
  
  check(arr, t) {
    return arr.some( v => v === t );
  }
  
  process(strs, errValue) {
     if( /[\(|\[|\{]+/g.test(strs) && /[\)|\]|\}]+/g.test(strs) )
       return this.run(strs);
     else
       return errValue;
  }
  
  run(strs) {    
    let openers = ['(', '[', '{'];
    let closers = [')', ']', '}'];
    
    for(let i=0; i<strs.length; i++) {
      if(this.check(openers, strs[i])) {
        this.push(strs[i])
      } else if(this.check(closers, strs[i])) {
        if(!this.pop(strs[i])) 
          return false;
      }
    }
    return this.isEmpty();
  }
}

function validBraces(braces){
  let validator = new Validator( function() {
    this.openerStack = [];
    this.closerList = {
      ')' : '(',
      ']' : '[',
      '}' : '{'
    }
  });
  return validator.process(braces, false);
}