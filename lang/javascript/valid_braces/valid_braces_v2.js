// stack 기능 별도 클래스로 분리
class BraceStack {
  constructor(func) {
     if(func)
       func.bind(this).call();
   }
 
   push(v) {
     this.openerStack.push(v);
   }
 
   pop() {
     this.openerStack.pop();
   }
 
   peek() {
     return this.openerStack[this.openerStack.length-1];
   }
 
   isEmpty() {
     return this.openerStack.length <= 0;
   }
 }
 
 class Validator {
   constructor(stack) {
     this.stack = stack;
   }
   
   valid(v, opener, closerList) {
     return opener === closerList[v];
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
         this.stack.push(strs[i])
       } else if(this.check(closers, strs[i])) {
         if(this.valid(strs[i], this.stack.peek(), this.stack.closerList))
           this.stack.pop();
         else
           return false;
       }
     }
     return this.stack.isEmpty();
   }
 }
 
 function validBraces(braces){
   let stack = new BraceStack( function() {
     this.openerStack = [];
     this.closerList = {
       ')' : '(',
       ']' : '[',
       '}' : '{'
     };
   });
   return new Validator(stack).process(braces, false);
 } 