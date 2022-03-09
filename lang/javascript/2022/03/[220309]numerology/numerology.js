/**
 * Your solution
 * @date JS Date object
 **/
 function solution(date){
  return [..."" + date.getDate() + (date.getMonth()+1) + date.getFullYear()].reduce( (t, v) =>  (""+(t+(+v))).split``.reduce( (r, n) => r+=(+n), 0), 0);
}