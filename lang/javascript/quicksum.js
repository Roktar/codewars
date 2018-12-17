function quicksum(packet) {
    let arr = [...packet];
    if(arr.find( (v, i) =>  v != " " && (v.charCodeAt(0) < 65 || v.charCodeAt(0) > 97) ) )
      return 0;
      
    let score = {};
    
    for(let i=0; i<26; i++)
      score[String.fromCharCode(65+i)] = (i+1);
    
    return arr.reduce( (t, v, i) => t += (v === " " ? 0 : (i+1)*score[packet[i]]), 0);
  }
  
  /* function validity(packet) {
    for(let i=0; i<packet.length; i++) {
      let ascii_code = packet[i].charCodeAt(0);
      if( packet[i] != " " && (ascii_code < 65 || ascii_code > 97) )
        return false;
    }
    return true;
  } */