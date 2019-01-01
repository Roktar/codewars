function catalog(s, article) {
    let arr = s.replace(/<\/*?[a-z]*>/g, " ").split("\n");
    let obj = {};
    let idx_arr = [], cursor = 0;
    let inc = 0;
      
    for(let v of arr) {
      if(!v)
        continue;
        
      let sub_arr = v.split("  ");
      
      if(!obj[sub_arr[1]])
        obj[sub_arr[1]] = sub_arr[1] + " > prx: $" + sub_arr[2] + " qty: " + sub_arr[3];
      else
        obj[sub_arr[1]+(inc++)] = sub_arr[1] + " > prx: $" + sub_arr[2] + " qty: " + sub_arr[3];
    }
    
    for(let v of Object.keys(obj)) {
      if( v.includes(article) )
        idx_arr[cursor++] = v;
    }
    
    if(idx_arr.length <= 1)
      return obj[ !obj[article] ? idx_arr : article ] || "Nothing";
    else
      return idx_arr.reduce( (arr, v, i) => {
        arr.push(obj[v]);
        return arr;
      }, []).join("\r\n");
  }