function getCommonDirectoryPath(pathes) {
  let checkFirstSlash = pathes.every( v => /^\//.exec(v) );
  let checkFirstNonSlash = pathes.every( v => /^\w/.exec(v) );
  let idx = (checkFirstSlash && !checkFirstNonSlash ? 1 : 0);
  let arr = (checkFirstSlash && !checkFirstNonSlash ? [''] : []);
  
  if(checkFirstSlash == false && checkFirstNonSlash == false)
    return '';
  
  let subPathSet = pathes.map( v => v.split`/`);
  
  return getDirectory(subPathSet, idx, subPathSet[0].length, arr).concat('').join`/`;
}

function getDirectory(subPathSet, idx, len, arr) {
  if( idx > len)
    return arr;

  if( !subPathSet.every(sub => sub[idx] === subPathSet[0][idx]) )
    return arr;
  else {
    arr.push(subPathSet[0][idx]);
    return getDirectory(subPathSet, idx+1, len, arr);
  }
}