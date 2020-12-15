function validISBN10(isbn) {
  if(/[^0-9?X]+/g.test(isbn) || isbn.length < 10 || isbn.length > 10 )
    return false;
  
  let v = 0;
  
  for(let i=0; i<9; i++)
    v += (+isbn[i]*(i+1));
  
  v += (isbn[9] === 'X' ? 10 : +isbn[9] ) * 10;
  
  return v%11 === 0;
}