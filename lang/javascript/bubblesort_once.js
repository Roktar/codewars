function bubblesortOnce(a) {
//   let arr = a.slice();
//   let len = arr.length;
//   for(let i=1; i<len; i++) {
//     if( arr[i -1] > arr[i] ) {
//       let tmp = arr[i];
//       arr[i] = arr[i-1];
//       arr[i-1] = tmp;
//     }
//   }
    
  return a.reduce( (arr, item, i) => {
      if( item < arr[i-1])
        arr.splice( (i-1), 0, item);
      else
        arr.push(item);
    return arr;
  }, []);
}