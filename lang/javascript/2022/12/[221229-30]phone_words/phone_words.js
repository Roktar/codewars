function phoneWords(stringOfNums) {
    if("" == stringOfNums)
      return "";
    
    let result = "";
  
    for(let v of stringOfNums.match(/(.)\1*/gi)) {
      let loop = 0;
      let base = 0;
      
      if(v[0] == 7 || v[0] == 9) 
        loop = Math.ceil(v.length/(base=4));
      else
        loop = Math.ceil(v.length/(base=3));
      
      for(let i=0; i<loop; i++) {
        let l = v.substr(i*base, base).length;
        
        if("0" == v[0])
          result += " ".repeat(l);
        else if("2" == v[0])
          result += String.fromCharCode(96+l);
        else if("3" == v[0])
          result += String.fromCharCode(99+l);
        else if("4" == v[0])
          result += String.fromCharCode(102+l);
        else if("5" == v[0])
          result += String.fromCharCode(105+l);
        else if("6" == v[0])
          result += String.fromCharCode(108+l);
        else if("7" == v[0])
          result += String.fromCharCode(111+l);
        else if("8" == v[0])
          result += String.fromCharCode(115+l);
        else if("9" == v[0])
          result += String.fromCharCode(118+l);
      }
    }
  
    return result;
  }