function tickets(peopleInLine){
  let dollars = {
    '25': 0,
    '50': 0,
    '100': 0
  };
  
  for(let pay of peopleInLine) {
    if(pay === 25)
      dollars['25']++;
    else { 
      if(pay === 100) {
        if(dollars['50'] >= 1) {
          if(dollars['25'] >= 1) {
            dollars['50']--;
            dollars['25']--;
          } else {
            if(dollars['25'] >= 2) {
              dollars['25'] -= 2;
            } else 
              return 'NO';
          }
          dollars['100']++;
        } else {
          if(dollars['25'] >= 3)
            dollars['25'] -= 3;
          else
            return 'NO';
          dollars['100']++;
        }
      } else if(pay === 50) {
        if(dollars['25'] >= 1)
          dollars['25']--;
        else 
          return 'NO';
        dollars['50']++;
      }
    }
  }
  
  return "YES";
}