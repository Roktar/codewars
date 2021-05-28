// #1
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

// #2
const solution = string => string.replace(/([a-z])([A-Z])/g, "$1 $2");