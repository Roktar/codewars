// dictionary of symbols for short and long syllables.
const syllables = {
  short: [".", "*", "x"],
  long: ["/", "_"]
}
const poeticList = {
  "ab" : "iamb",
  "ba" : "trochee",
  "aa" : "pyrrhic",
  "bb" : "spondee"
}
// return the type of meter
const identifyMeter = str => {  
  //   if( /[^\.|*|x|/|_]/g.test(str) )
  //     return "What is this?";
  
  //   if( (str.length%2) === 1 || str.length > 2 )
  //     return "Not a dissyllable.";

  //   return poeticList[str.replace(/[\.|x|*]/g, "a").replace(/[\/|_]/g, "b").match(/[a|b]{1,2}/g)];
  let repList = [];
  repList.push( preprocessBackslash );
  
  let falseRegExp = makeCondition(["^"+syllables.short.slice(0, 1), ...syllables.short.slice(1), ...syllables.long], "g", repList);
  let aRegExp = makeCondition(syllables.short, "g", repList);
  let bRegExp = makeCondition(syllables.long, "g", repList);

  if(falseRegExp.test(str))
    return "What is this?";
  if( (str.length%2) === 1 || str.length < 2 )
    return "Not a dissyllable.";
  return poeticList[replace(str, [aRegExp, bRegExp], ["a", "b"])];
}

function preprocessBackslash(v) {
  let target = "";
    
  if(v.includes("."))
    target = ".";
  else if(v.includes("\\"))
    target = "\\";
      
  if(target != "") {
    let idx = [...v].findIndex( v => v === target );
    return v.substring(0, idx) + "\\" + v.substr(idx);
  }
  
  return v;
}

function makeCondition(arr, option, functions) {
  return new RegExp("["+(arr.map( v => functions.reduce( (result, func, i) => func(result), v)).join("|"))+"]", option);
}

function replace(origin, regs, repVal) {
  return regs.length != repVal.length ? "" : regs.reduce( (result, reg, i) => result.replace(reg, repVal[i]), origin);
}