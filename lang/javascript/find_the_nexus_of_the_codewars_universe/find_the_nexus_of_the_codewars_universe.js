function nexus(users) {
  let new_obj = {};
  for(let key of Object.keys(users)) {
    let arr = [parseInt(key), users[key]];
    let max = Math.max.apply(null, arr), min = Math.min.apply(null, arr);
    new_obj[key] = max-min;
  }
  
  let nexus = [0, Number.MAX_VALUE];
  for(let key in new_obj) {
    if(nexus[1] > new_obj[key]) {
      nexus[0] = key;
      nexus[1] = new_obj[key];
    }
  }
  
  return parseInt(nexus[0]);
}