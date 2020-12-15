function solution(str){
  return (str.length%2 === 1? str+"_":str).match(/\w{2}/g) || [];
}