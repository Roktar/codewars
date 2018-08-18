function insertMissingLetters (str){
    'use strict';
    let returnStr = "";
    let missingLetter = [];
    let strLen = str.length;

    // 만약 letters(missingLetter)가 [ b e f g x y z ] 일 때
    // 현재 문자(ch)가 d일 경우, e f g x y z 를 뽑을 수 있도록 해야한다.
    // ch는 d이므로 b는 제외[0번배열]하고 1번 배열부터 뽑을 수 있도록.
    const findIdx = (ch, letters) => {
        let targetAsciiCode = ch.charCodeAt(0);
        let idx = 0;
        for(let i = 0; i < 26; i++) {
            let asciiCode = String.fromCharCode(97+i).toUpperCase();
            if( targetAsciiCode == (97+i)-1 )
                return idx;
            if( letters[idx] === asciiCode )
                idx++;
        }
        return letters.length;
    };

    for(let a of [...'abcdefghijklmnopqrstuvwxyz']) {
        if( !str.includes(a) )
            missingLetter.push(a.toUpperCase());
    } // 입력값에 포함되지않는 알파벳을 추출
    
    for(let i in str) {
        if( returnStr.includes(str[i]) )
            returnStr += str[i];    
        else {
            returnStr += str[i];    
            let j = findIdx(str[i], missingLetter);
            let letterLen = missingLetter.length;
            while(j < letterLen) {
                returnStr += missingLetter[j++];
            }
        }
    }
    return returnStr;
}

console.log(insertMissingLetters('salhrfxxgevizycljfqsrovgkyrfhdppidiektcl'));
    