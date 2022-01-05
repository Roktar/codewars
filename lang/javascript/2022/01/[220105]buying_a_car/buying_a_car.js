// #1
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if((startPriceOld-startPriceNew) >= 0)
      return [0, startPriceOld-startPriceNew];
  
    let loop = 0, loss = percentLossByMonth/100;
  
    while(true) {
      loop++;
  
      if(loop%2 == 0)
        loss += 0.005;
  
      startPriceOld -= (startPriceOld*loss);
      startPriceNew -= (startPriceNew*loss);
  
      if( (startPriceOld+(savingperMonth*loop)) > startPriceNew)
        return [loop, Math.round((startPriceOld+(savingperMonth*loop))-startPriceNew)];
    }
  
    return [0, 0];
}

// #2
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if((startPriceOld-startPriceNew) >= 0)
      return [0, startPriceOld-startPriceNew];
  
    let loop = 0, loss = percentLossByMonth/100;
  
    while((startPriceOld+(savingperMonth*loop)) < startPriceNew) {
      if((++loop)%2 == 0)
        loss += 0.005;
  
      startPriceOld -= (startPriceOld*loss);
      startPriceNew -= (startPriceNew*loss);
    }
  
    return [loop, Math.round((startPriceOld+(savingperMonth*loop))-startPriceNew)];
}