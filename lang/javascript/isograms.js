// function isIsogram(str){
//   try {
//     [...str].forEach( (item, i) => {
//       let count = 0;
//       for(let c of str) {
//         if(item.toLowerCase() === c.toLowerCase())
//           count++;
//         if(count > 1)
//           throw Error();
//       }
//     });
//   } catch(e) {
//     return false;
//   }
//   return true;
// }

function isIsogram(str) {
    return ![...str].some( (v) => {
      let count = 0;
      for(let c of str) {
        if(v.toLowerCase() === c.toLowerCase())
          count++;
      }
      return (count > 1);
    });
  }