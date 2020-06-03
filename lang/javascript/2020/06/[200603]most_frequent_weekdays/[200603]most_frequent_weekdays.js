function mostFrequentDays(year){
  let day = new Date(year, 0, 1).getDay();
  let dayLst = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let leapYear = ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? true : false);
  
  if(!leapYear)
    return [ dayLst[( day == 0 ? 6 : day-1 )%7] ];
  else
    return [ day, ( day == 0 ? 6 : day-1 )%7].sort().map( v => dayLst[v] );
}