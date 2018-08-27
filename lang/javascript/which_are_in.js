function inArray(array1,array2){
    /*let new_arr = [];
  
    for(let e of array1) {
       //if( array2.filter( item => item.includes(e)).length > 0 )
       // new_arr.push(e);
      for(let e2 of array2) {
        if(e2.includes(e)) {
          new_arr.push(e);
          break;
        }
      }
    }
    
    return new_arr.sort();*/

/*     return array1.reduce( (arr, item, i) => {
        if( array2.findIndex( (item2, i) => item2.includes(item) ) > -1 )
          arr.push(item);
        return arr;
    }, []).sort(); */

    return array1.filter( (item, i) => array2.findIndex( (item2, i) => item2.includes(item) ) > -1 ).sort();
}