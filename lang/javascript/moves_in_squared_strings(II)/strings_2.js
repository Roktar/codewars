function rot(strng) {
    return strng.split("\n").reverse().reduce( (arr, v, i) => {
      arr.push( v.split("").reverse().join("") );
      return arr;
    }, []).join("\n");
}

function selfieAndRot(strng) {
    let common = new Array(strng.split("\n")[0].length).fill('.').join("");
    let n = strng.match(/[\w*]+/gi).map( (v, i) => v.concat(common) ).join("\n");
    
    return [n, rot(n)].join("\n");
}

function oper(fct, s) {
    return fct(s); 
}