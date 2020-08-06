function int32ToIp(int32){
    //#1
    let strValue = (int32).toString(2).padStart(8*4, 0);
    return new Array(4).fill(0).map( (v, i) => parseInt(strValue.substr(i*8, 8), 2) ).join`.`;

    //#2 
    return (int32).toString(2).padStart(32, '0').match(/[\d]{8}/g).map( v => parseInt(v, 2) ).join`.`;
  }