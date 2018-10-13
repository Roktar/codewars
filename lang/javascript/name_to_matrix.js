const matrixfy = str => {
    if(str.length < 1)
      return "name must be at least one letter";
    else {
      let idx = 0, arr = [], max_loop = get_array_size(str);
      
      for(let i=0; i<max_loop; i++) {
        let sub_arr = [];
        
        for(let j=0; j<max_loop; j++) {
          if( !str[j+(idx*max_loop)])
            sub_arr.push('.');
          else
            sub_arr.push(str[j+(idx*max_loop)]);
        }
        arr.push(sub_arr);
        idx++;
      }
      return arr;
    }
  };
  
  const get_array_size = s => {
    let ret_size = 1;
    let str_size = s.length;
    
    while(true) {
      if( (ret_size*ret_size) >= str_size)
        break;
      ret_size++;
    }
    
    return ret_size;
  }
  