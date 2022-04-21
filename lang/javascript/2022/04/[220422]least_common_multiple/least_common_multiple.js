var lcm = function () {
   return [...arguments].reduce( (r, v) => l(Math.min(r, v), Math.max(r, v)), 1);
 };
 
 const l = (a, b) => a*b/g(a, b);
 const g = (a, b) => b ? g(b, a%b) : a;
 
 
 // function primeFactorization(arr) {
 //   let pfList = [];
   
 //   for(let i=0; i<arr.length; i++) {
 //     let v = arr[i];
 //     let pf = [];
     
 //     for(let j=2; j<=v; j++) {
 //       while(v%j === 0) {
 //         pf.push(j)
 //         v /= j;
 //       }
 //     }
     
 //     pfList.push(pf);
 //   }
   
 //   return pfList;
 // }