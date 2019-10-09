const regChars = [ 'b', 'c', 'd', 'f', 'n', 'r', 's', 't', 'v', 'w' ];

function duplicateEncode(word){
  word = word.toLowerCase();
  return [...word].reduce( (strs, v, i) => strs += (isDuplicate(v, word) ? ")" : "("), "");
}

function isDuplicate(c, word) {
  // null이 발생할 때 정상적인 처리를 위해 length만 가진 객체를 생성하여 활용 
  // null 발생 이유 : regChars에 있는 문자들은 역슬래시가 붙으면 특정 기능을 하는 것 같은데 그 기능이 실행되면 해당하는 게 없어서 반환값이 null이 나옴.
  // return (word.match(new RegExp( (regChars.some( v => c === v ) ? '' : '\\')+c, "gi")) || {length:0}).length > 1;
  return word.match(new RegExp( (regChars.some( v => c === v ) ? '' : '\\')+c, "gi")).length > 1;
}
