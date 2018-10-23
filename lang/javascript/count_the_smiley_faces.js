function countSmileys(arr) {
    if(arr.length < 1)
      return 0;
      
    let eye = [ ":", ";" ];
    let nose = [ "-", "~" ];
    let mouse = [ ")", "D" ];
    let face_count = 0;
    
    arr.forEach( (v, i) => {
      if(find(eye, nose, mouse, ...v))
        face_count++;
    });
    return face_count;
  }
  
  function find() {
    let args = Array.prototype.slice.call(arguments);
    let arr_count = args.reduce( (t, v, i) => Array.isArray(v) ? t+1 : t , 0);
  
    if( (args.length-arr_count) === 3 )
      return check(args);
    else
      return check(null, args[0], args[2], args[3], args[4]);
  }
  
  function check(args, ...args2) {
    if(!args)
      return (args2[2].includes(args2[0][0]) || args2[2].includes(args2[0][1])) && (args2[3].includes(args2[1][0]) || args2[3].includes(args2[1][1]));
    else
      return (args[3].includes(args[0][0]) || args[3].includes(args[0][1])) && (args[4].includes(args[1][0]) || args[4].includes(args[1][1])) && (args[5].includes(args[2][0]) || args[5].includes(args[2][1]));
  }