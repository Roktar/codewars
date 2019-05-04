const convert_table = {
  enc: {
    '0' : 1,
    '1' : 2,
    '2' : 3
  },
  dec: {
    '3' : 2,
    '2' : 1,
    '1' : 0
  }
}

const encrypt = x => {
  return [...x].reduce( (arr, c, i) => {
    arr.push([...c.charCodeAt(0).toString(3)].reduce( (str, v, i) => str += convert_table.enc[v], ""));
    return arr;
  }, []).join("|");
}

const decrypt = x => {
  return x.split("|").reduce( (arr, str, i) => {
    arr.push( String.fromCharCode( parseInt([...str].reduce( (ter, c, i) => ter += convert_table.dec[c], ""), 3)) );   
    return arr;
  }, []).join("");
}