function bitsWar(numbers) {
  let values = numbers.reduce( (o, v) => {
    Math.abs(v%2) === 1 ? o[0].push(v) : o[1].push(v);
    return o;
  }, [[], []]).reduce( (o, arr, i) => {
      o[i] = arr.map( v => {
        let val = [...(v).toString(2)].reduce( (t, b) => b == 1 ? t+=1 : t, 0);
        if(v < 0)
          val *= -1;
        return val;
      }).reduce( (t, v) => t+=v, 0);
    return o;
  }, []);
  
   if(values[0] > values[1]) return "odds win";
   else if(values[0] < values[1]) return "evens win";
   else return "tie";
}