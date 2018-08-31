function reverseWords(str) {
    let s = str.split(" ").reduce( (rs, s, i) => {
      let arr = [];
      [...s].forEach( (item, i) => {
        arr.splice(0, 0, item);
      });
      rs += arr.join("") + " ";
      return rs;
    }, "");
    return s.substring(0, s.length-1);
  }