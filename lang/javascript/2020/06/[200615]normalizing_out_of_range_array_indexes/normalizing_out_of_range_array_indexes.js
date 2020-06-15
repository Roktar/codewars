function normIndex(array, index){
  if(index < 0)
    return array[((array.length-(-index))+(array.length*parseInt(-index/array.length)))%array.length];
  else
    return array[index%array.length];
}