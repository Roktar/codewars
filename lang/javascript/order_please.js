function order(words){
    if(!words.length)
        return "";

    let arr = [];
    let num = [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

    words.split(" ").forEach( (v, i) => {
        arr[findNumber(v, num)] = v;
    });

    return arr.join(" ");
}
  
function findNumber(s, n) {
    return findIndex(s, n);
}
  
function findIndex(strs, numbers) {
    for(let i=0; i<numbers.length; i++) {
        if(strs.includes(numbers[i]))
            return i;
    }
    return null;
}