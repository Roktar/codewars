function solve(s, k){
    
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let cursor = 0;
    
    while(k > 0) {
        let len = 0;
        
        if(s.includes(alphabet[cursor]))
          len = s.match(new RegExp(alphabet[cursor], "gi")).length;

        if(len > 0) {
            for(let i=0; i<len; i++) {
                if(k > 0) {
                    s = s.replace(alphabet[cursor], "");
                    k--;
                } else 
                    break;
            }
        }
        cursor++;
        if(cursor > 25)
            break;
    }    
    return s;
}

solve('1', 1);
