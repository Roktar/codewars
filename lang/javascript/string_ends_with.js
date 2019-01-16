function solution(str, ending){
    return str.substr(str.length-ending.length, ending.length) === ending;
}