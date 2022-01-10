function isbnConverter(isbn) {
  let subISBN = isbn.match(/^[0-9|\-]+(?=\-)/g)[0];
  let lastNumber = [..."978", ...subISBN.replace(/\-/g, "")].reduce( (t, v, i) => t+=(+v*(!(i&0x1)?1:3)), 0) % 10;  
  
  return `978-${subISBN}-${lastNumber?10-lastNumber:lastNumber}`;
}