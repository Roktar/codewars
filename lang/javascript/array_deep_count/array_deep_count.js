function deepCount(a){
  if(!a.length)
     return 0;
 
   return a.reduce( (t, obj, i) => {
     if(Array.isArray(obj))
       t += getCount(obj, 0);
     return t+1;
   }, 0);
 }
 
 function getCount(arr, count) {
   for(let i=0; i<arr.length; i++) {
     count++;
     if(Array.isArray(arr[i]))
       count += getCount(arr[i], 0);
   }
   
   return count;
 }