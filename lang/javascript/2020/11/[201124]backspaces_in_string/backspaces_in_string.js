// #1
function cleanString(s) {
  let loop = (s.match(/#/g) || {length:0}).length;
  
  while(loop--)
    s = s.replace(/\S?#/, "");
  
  return s;
};

// #2
function cleanString(s) {
  return s.indexOf("#") > -1 ? cleanString(s.replace(/\S?#/, "")) : s;
};