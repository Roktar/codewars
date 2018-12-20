function dbSort(a){
    let num_arr = [], ch_arr = [];
    a.forEach( (v, i) => ( typeof v === "number" ? num_arr.push(v) : ch_arr.push(v) ));
    
    return num_arr.sort( (a, b ) => a - b ).concat( ch_arr.sort() );
}