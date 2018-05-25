function solution(number){
    let eachCount = [0, 0, 0];
    let numbers = [];
    
    for(let i=1; i<number; i++) 
      numbers[(i-1)] = i;
    
    eachCount[2] = numbers.filter( (n) => { return n%(3*5) == 0 } ).length;
    eachCount[1] = numbers.filter( (n) => { return ((n%5)==0) && (n%3)!= 0 } ).length;
    eachCount[0] = numbers.filter( (n) => { return ((n%3)==0) && (n%5)!= 0 } ).length;
    
    return eachCount;
  }