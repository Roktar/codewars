function getMiddle(s) {
  if(s.length > 1) {
    var len = s.length;

    if( (len%2) == 0 )
      return s.substr( parseInt(len/2)-1, 2);
    else 
      return s.charAt( parseInt(len/2) );
  } 
  return s;
}