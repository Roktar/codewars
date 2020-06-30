var fizzBuzzCustom = function(stringOne="Fizz", stringTwo="Buzz", numOne=3, numTwo=5) {
  return new Array(100).fill(null).map( (v, i) => {
    if( (i+1)%numOne === 0 && (i+1)%numTwo === 0 )
      return stringOne.concat(stringTwo);
    else if( (i+1)%numOne === 0 )
      return stringOne;
    else if( (i+1)%numTwo === 0 )
      return stringTwo;
    else
      return i+1;
  });
};