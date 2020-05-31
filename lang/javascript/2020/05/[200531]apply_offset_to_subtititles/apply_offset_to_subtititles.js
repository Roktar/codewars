function subsOffsetApply(str, offset){
  let obj = str.match(/[^ ][\S]*/g);
  
  return new TimeAppender(obj[0], obj[2], obj.slice(3).join(" ")).process(offset);
}

function TimeAppender(startTime, endTime, message) {  
  this.start = startTime;
  this.end = endTime;
  this.msg = message;
     
  this.getTime = function() {
    let startObj = this.start.split(":");
    let endObj = this.end.split(":");
    
    startObj = startObj.concat(startObj.pop().split(","));
    endObj = endObj.concat(endObj.pop().split(","));
          
    return {start: this.getTimeMs(startObj), end: this.getTimeMs(endObj)};
  }
  
  this.getTimeMs = function(obj) {
    let msValue = 0;
        
    obj = obj.map( v => parseInt(v) );
            
    if(obj[0] > 0)
      msValue += (obj[0]*3600);
    if(obj[1] > 0)
      msValue += (obj[1]*60);
    if(obj[2] > 0 )
      msValue += obj[2];
    
    msValue *= 1000;
    msValue += obj[3];
    
    return msValue;
  }
  
  this.getTimeObject = function(ms) {
    let arr = new Array(4).fill(0);
    let msValue = 0;
    
    msValue = (""+ms/1000).split(".")[1] || "000";
    ms = parseInt(ms/1000);
        
    while(ms > 0) {
      if(ms > 3600) {
        ms -= 3600;
        arr[0]++;
      } else if(ms > 60) {
        ms -= 60;
        arr[1]++;
        
        if(arr[1] > 59) {
          arr[1] -= 60;
          arr[0]++;
        }
      } else {
        if(ms === 60)
          arr[1]++;
        else
          arr[2] = ms;
        ms = 0;
        break;
      }
    }
        
    return {hms: arr.map( v => ((""+v).length < 2 ? "0"+v : ""+v) ), ms: (msValue.length < 3 ? msValue+("0".repeat(3-msValue.length)) : msValue) };
  }
  
  this.getTimeResult = function(offset) {
    let {start, end} = this.getTime();
     start += offset;
     end += offset;
          
     if(start > 359999999 || end > 359999999 || start < 0 || end < 0)
       return "Invalid offset";
     else {
       let startTime = this.getTimeObject(start), endTime = this.getTimeObject(end);
        startTime = startTime.hms.slice(0, 3).join(":") + "," + startTime.ms;
        endTime = endTime.hms.slice(0, 3).join(":") + "," + endTime.ms;
       return [startTime, "-->", endTime, this.msg].join(" ");
     }
  }
  
  this.process = function(offset) {
    return this.getTimeResult(offset);
  }
  
  return this;
}