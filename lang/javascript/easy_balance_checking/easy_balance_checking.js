function balance(book) {
    let arr = book.split("\n");
    let bal = parseFloat(arr[0]).toFixed(2);
    let tot = 0;
    let ctgr_cnt = 0;
    let result = "";
  
    result += "Original Balance: " + bal + "\r\n";
    for(let i=1; i<arr.length; i++) {
      if(!arr[i])
        continue;
      arr[i] = arr[i].replace(/[!=:;{},?]*/gi, "");
      let sub = arr[i].split(" ");
      let exp = parseFloat(sub[2]).toFixed(2);
      result += sub[0].concat(" " + sub[1] + " ") + exp + " Balance " + (bal=(bal-exp).toFixed(2)) + "\r\n";
      tot += parseFloat(sub[2]);
      ctgr_cnt++;
    }
    result += "Total expense  " + tot.toFixed(2) + "\r\n";
    result += "Average expense  " + (tot/ctgr_cnt).toFixed(2);
  
  return result;
  }