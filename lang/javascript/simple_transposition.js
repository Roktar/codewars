function simpleTransposition(text) {
    let rows = [[], []];
    
    for(let i=0; i<text.length; i++)
      rows[(i%2)].push(text[i]);
    
    return rows[0].concat(rows[1]).join("");
  }