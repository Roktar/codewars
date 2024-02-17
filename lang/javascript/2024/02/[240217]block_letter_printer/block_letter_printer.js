function blockPrint(input) {
  if(!/\w/.test(input)) return "";
  
  let res = [[], [], [], [], [], [], []];
  
  [...input.toLowerCase().replace(/^\s+|\s{1,}$/g, "")].map( v => alpha.get(v).forEach( (v, i) => res[i].push(v)) );
  
  return res.map( (arr, i) => {    
    if((arr[arr.length-1] || ' ').lastIndexOf(' ') == 4) {
      let alphabet = (arr[arr.length-1].match(/\w/)||[])[0];
      arr[arr.length-1] = res[i][res[i].length-1].substring(0, arr[arr.length-1].lastIndexOf(alphabet)+1);
    }
    
    return arr.join` `;
  }).join`\n`;
}