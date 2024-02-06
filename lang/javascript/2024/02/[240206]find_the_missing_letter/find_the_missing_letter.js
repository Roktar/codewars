function findMissingLetter(array) {
  let alphabetArr = array[0].charCodeAt() - 97 >= 0 ? [...'abcdefghijklmnopqrstuvwxyz'] : [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  let firstChIdx = alphabetArr.indexOf(array[0]), lastChIdx = alphabetArr.indexOf(array[array.length-1]);
  
  for(let i=firstChIdx; i<lastChIdx; i++) {
    if(array.indexOf(alphabetArr[i]) == -1)
      return alphabetArr[i];
  }
}