function stockList(listOfArt, listOfCat){
  
  if( !listOfArt.length || !listOfCat.length )
    return "";
    
  let indexes = {};
  
  for(let key of listOfCat)
    indexes[key] = 1;
    
  listOfArt.reduce( (obj, v, i) => {
    let arr = v.split(" ");
    if( obj[arr[0].substr(0, 1)] )
      obj[ arr[0].substr(0, 1) ] += parseInt(arr[1]);
    return obj;
  }, indexes);

  return Object.keys(indexes).reduce( (arr, key, i) => {
    arr.push( "(" + key + " : " + (indexes[key]-1) + ")" );
    return arr;
  }, []).join(" - ");

}