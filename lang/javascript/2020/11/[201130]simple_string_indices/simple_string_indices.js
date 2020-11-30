function solve(str,idx) { 
  if(['(', ')'].includes(str[idx])) {
    let stack = new Stack();

    for(let i=idx; i<str.length; i++) {
      if(str[i] === '(')
        stack.push('(');
      else if(str[i] === ')') {
        if(stack.size() <= 0)
          break;
        stack.pop();
        
        if(stack.isEmpty())
          return i;
      }
    }
  }
  
  return -1;
}

// #1 - class(es6)
class Stack {
  constructor() {
    this.index = 0;
    this.element = [];
  }
  
  push(e) {
    this.index++;
    this.element.push(e);
  }
  
  pop() {
    this.index--;
    this.element.pop();
  }
  
  size() {
    return this.index;
  }
  
  isEmpty() {
    return this.index === 0;
  }
}

// #2(es5)
 function Stack() {
   let index = 0;
   let element = [];
  
   return {
     push(e) {
       index++;
       element.push(e);
     },
     pop() {
       index--;
       element.pop();
     },
     size() {
       return index;
     },
     isEmpty() {
       return index === 0;
     }
   }
 }

 // #3(es5)
function Stack() {
  this.index = 0;
  this.element = [];
  
  this.push = function(e) {
    this.index++;
    this.element.push(e);
  }
  
  this.pop = function() {
    this.index--;
    this.element.pop();
  }
  
  this.size = function() {
    return this.index;
  }
  
  this.isEmpty = function() {
    return this.index === 0;
  }
}