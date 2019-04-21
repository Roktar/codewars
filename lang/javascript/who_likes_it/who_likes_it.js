function likes(names) {
  let postfix = [" others", " likes this"];
  let length = names.length;

  if(!length)
    return "no one" + postfix[1];

  if(length === 1)
    return names[0] + postfix[1];
  else if(length >= 2) {
    postfix[1] = postfix[1].replace("s", ""); // likes의 s를 제거, like로 만듬.
    if(length === 2)
      return names[0] + " and " + names[1] + postfix[1];
    else if(length === 3)
      return names[0] + ", " + names[1] + " and " + names[2] + postfix[1];
    else
      //return names.shift() + ", " + names.shift() + " and " + (names.length) + postfix.join("");
      return names.slice(0, 2).join(", ") + " and " + (length-2) + postfix.join("");
  } 
}