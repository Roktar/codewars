function alphabetPosition(text) {
  return [...text].reduce( (arr, v, i) => {
    let n = v.toLowerCase().charCodeAt(0) - 96;
    if( n > 0 && n < 27)
      arr.push(n);
    return arr;
  }, []).join(" ");
}