function alphanumeric(string){
  if(!string.length)
    return false;
  return !/[^A-Z|a-z|0-9]/gi.test(string);
}