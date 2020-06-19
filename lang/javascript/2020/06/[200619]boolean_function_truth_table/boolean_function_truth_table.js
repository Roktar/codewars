function truthTable (booleanFunction) {
  let names = booleanFunction.toString().replace('\n', '').match(/\(.+\)./)[0];
  let argsName = names.replace(/[\(|\)|\s|,]/g, "");
  let funcName = (booleanFunction.name || 'f') + names.replace(/ /g, '');
  let argsCnt = argsName.length;
  let result = [...argsName].join(" ") + "\t\t" + funcName + '\n'.repeat(2);
  
  for(let i=0; i<Math.pow(2, argsCnt); i++) {
    let arr = [...(i).toString(2).padStart(argsCnt, '0')].map( v => +v); // ex) '001' -> [0, 0, 1]
    result += arr.join(" ") + "\t\t" + (booleanFunction(...arr) ? 1 : 0) + '\n';
  }
  
  return result;
}