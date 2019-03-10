const createIterator = (array) => {
  let obj = {};
  obj.index = 0;
  obj.done = false;
  obj.next = function() {
    let returnObj = {value:array[this.index]};
    if(this.index++ === array.length)
      this.done = true;
    else 
      this.done = false;
    if(this.index > array.length)
      this.index--;
    returnObj.done = this.done;
    return returnObj;
  };
  return obj; 
};
