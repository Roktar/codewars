function solution(numbers) {
    while(numbers.isContinue())
        numbers.calc(is, sub);
    return numbers.sum();
}  

let is = (a, b) => a>b;
let sub = (a, b, idx1, idx2, data) => data[idx1] -= data[idx2];
let no_operation = () => {}

Array.prototype.sum = function() {
    return this.reduce( (t, v, i) => t+v, 0); 
};
Array.prototype.isContinue = function() {  
    return this.calc(no_operation, is, is);
}
Array.prototype.calc = function(condition, process, stopper) {
    this.sort((a, b) => b-a);
    for(let i=0, len = this.length; i<len; i++) {
      if(!stopper) {
          if(condition(this[i], this[i+1]))
              process(this[i], this[i+1], i, i+1, this);
      } else if(stopper(this[i], this[i+1]))
          return process(this[i], this[i+1], i, i+1, this);
    }
    return undefined;
} 
let numbers = [6, 9, 21];
console.time("t");
console.log( solution(numbers) );
console.timeEnd("t");