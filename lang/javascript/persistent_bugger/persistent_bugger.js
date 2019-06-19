function persistence(num) {
  return recursive(num, 0);
}

function recursive(num, cnt) {
   if(num < 10)
     return cnt;
   else 
     return recursive([...num.toString()].reduce( (t, v, i) => t *= parseInt(v), 1), cnt+1);
}