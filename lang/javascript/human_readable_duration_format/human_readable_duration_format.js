const standardTime = {
  ONE_YEAR: {value: 31536000, title:"year"},
  ONE_MONTH: {value: 2629800, title:"month"},
  ONE_DAY: {value: 86400, title:"day"},
  ONE_HOUR: {value: 3600, title:"hour"},
  ONE_MINUTE: {value: 60, title:"minute"},
  SECOND: {title: "second"}
}


// #1
function formatDuration (seconds) {  
  if(seconds == 0)
    return "now";

  return getDuration(seconds, function(obj, type) {
    let v = 0;
    
    if(type != "SECOND") {
      while(obj.value >= standardTime[type].value) {
        v++;
        obj.value -= standardTime[type].value;
      }
      
      return v + " " + standardTime[type].title + (v > 1 ? "s" : "") + (obj.value > 0 ? "," : "");
    } else
      return obj.value + " " + standardTime[type].title + (obj.value > 1 ? "s" : "");
  });     
}

function getDuration(func) {
  let arr = [];
  
  if(valueWrapper.value >= standardTime.ONE_YEAR.value)
    arr.push(func(valueWrapper, "ONE_YEAR"));
  if(valueWrapper.value >= standardTime.ONE_DAY.value)
    arr.push(func(valueWrapper, "ONE_DAY"));
  if(valueWrapper.value >= standardTime.ONE_HOUR.value)
    arr.push(func(valueWrapper, "ONE_HOUR"));
  if(valueWrapper.value >= standardTime.ONE_MINUTE.value)
    arr.push(func(valueWrapper, "ONE_MINUTE"));
  if(valueWrapper.value != 0)
    arr.push(func(valueWrapper, "SECOND"));
  arr[(arr.length > 2 ? arr.length -2 : 0)] = arr[(arr.length > 2 ? arr.length -2 : 0)].replace(",", " and");
  
  return arr.join(" ");
}
// ----------------------------------------------------------------------------------------------------------------------------
// #2

const standardTime = {
  ONE_YEAR: {value: 31536000, title:"year"},
  ONE_MONTH: {value: 2629800, title:"month"},
  ONE_DAY: {value: 86400, title:"day"},
  ONE_HOUR: {value: 3600, title:"hour"},
  ONE_MINUTE: {value: 60, title:"minute"},
  SECOND: {value: 1, title: "second"}
}

function formatDuration (seconds) {  
  if(seconds == 0)
    return "now";
    
  let runner = preprocess(seconds, ["ONE_YEAR", "ONE_DAY", "ONE_HOUR", "ONE_MINUTE", "SECOND"], getDuration);
  
  return runner(function(obj, type) {
                 let v = 0;
                 if(type != "SECOND") {
                   while(obj.value >= standardTime[type].value) {
                     v++;
                     obj.value -= standardTime[type].value;
                   }
                   
                   return v + " " + standardTime[type].title + (v > 1 ? "s" : "") + (obj.value > 0 ? "," : "");
                 } else
                   return obj.value + " " + standardTime[type].title + (obj.value > 1 ? "s" : "");
               });
    }

function preprocess(val, conditions, func1) {
  let valueWrapper = {value: val};
  
  return function(func2) {
    return func1(valueWrapper, conditions, func2);
  }
}

function getDuration(valueWrapper, conditions, func) {
  let arr = [];
    
  for(let type of conditions) {
    if(valueWrapper.value >= standardTime[type].value)
      arr.push(func(valueWrapper, type));
  }
  
  arr[(arr.length > 2 ? arr.length -2 : 0)] = arr[(arr.length > 2 ? arr.length -2 : 0)].replace(",", " and");
  
  return arr.join(" ");
}