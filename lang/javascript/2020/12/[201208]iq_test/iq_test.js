function iqTest(numbers){
  let odd = [0, ], even = [0, ];
  let arr = numbers.split(" ");
  
  for(let i=0; i<=arr.length; i++) {    
    if( (+arr[i])%2 === 0 ) {
      odd[0]++;
      odd[1] = i+1;
    } else {
      even[0]++;
      even[1] = i+1;
    }
    
    if(odd[0] >= 2) {
      if(!even[1])
        continue;
      else
        return even[1];
    } else if(even[0] >= 2) {
      if(!odd[1])
        continue;
      else
        return odd[1];
    }
  }
  
  return -1;
}