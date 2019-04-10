function highlight(code) {
  let colorTexts = [];
  let seqText = "";
  let funcObj = [ (v1, v2) => v1 === v2, (v1, v2) => ( ( v1 >= '0' && v1 <= '9') && ( v1 >= '0' && v1 <= '9' ) && (v2 >= '0' && v2 <= '9') ) ];
  
  for(let i=0; i<code.length; i++) {
    seqText += code[i];
    
    if(validation(funcObj, code[i], code[i+1]))
      continue;
    
    colorTexts.push( getColorTag(seqText, v => v.length > 1 ) );
    seqText = "";
  }
  return colorTexts.join("");
}

function getColorTag(v, valid) {
  let colors = { 'F' : 'pink', 'L' : 'red', 'R' : 'green', 'number' : 'orange' };
  let v2 = (valid(v) ? v.substr(0, 1) : v);
  let isNumber = ( v2 >= '0' && v2 <= '9' ? "number" : undefined);
  
  return ( colors[isNumber || v2] ? "<span style=\"color: " + colors[isNumber || v2] + "\">" + v + "</span>" : v );
}

function validation(funcObj, ...values) {
  return funcObj.some( func => func(...values) );
}