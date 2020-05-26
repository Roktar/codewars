function regexContainsAll(str) {
  return new RegExp( `${[...str].map( v => "(?=[^ ]*"+v+")" ).join("") }` ,"g");
}