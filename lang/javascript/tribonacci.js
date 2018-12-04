var op_num = 3;

function tribonacci(signature,n){
  if(n<op_num)
    return signature.slice(0, n);
  
  for(let i=op_num; i<n; i++)
    signature[i] = signature.slice(i-op_num, i).reduce( (t, v, i) => t += v, 0);
  
  return signature;
}