function verticalHistogramOf(s){
    let freq = [];
    let histogram = [];
    let max = 0;
    let titles = [];  
    for(let i = 0; i<= 26; i++)
      freq[i] = 0;
    [...s].forEach( (ch, i) => {
      let code = ch.charCodeAt(0);
      
      if( code >= 65 && code <= 91) {
        titles.push(ch);
        freq[code-65]++;
      }
    });
        
    max = Math.max.apply(null, freq);
      
    for(let i=0; i<max; i++) {
      let sublist = [];
      for(let j=0; j<26; j++) {
        if(!freq[j])
          continue;
        if(i-freq[j] < 0)
          sublist.push('*');
        else
          sublist.push(' ');
      }
      histogram.push(sublist);
    }
    histogram.reverse();
      
    let strs = "";
    if(histogram.length > 0) {
      for(let i=0; i<max; i++) {
        let str = histogram[i].join(" ");
        if(str.match(new RegExp('[*]', 'g')).length > 1) {
          if(histogram[i][histogram[i].length-1] === '*')
            strs += str + "\n";
          else {
            let last = histogram[i].reduce((arr, v, i) => {
                                            if(v === '*')
                                              arr.push(i);
                                            return arr;
                                    }, []);
            let subidx = 0;
  
            for(let i=0; i<=last[last.length-1]; i++) {
              if(last[subidx] === i) {
                strs += "* ";
                subidx++;
              } else
                strs += "  ";
            }
            strs = strs.substring(0, strs.length-1) + "\n";  
          }
        } else {
          let last = histogram[i].findIndex( (item, i) => item === '*' );
          for(let i=0; i<last; i++)
            strs += "  ";
          strs += '*\n';
        }
      }
      for(let i=0; i<26; i++) {
        if(freq[i])
          strs += String.fromCharCode(65+i) + " ";
      }
    }
    return strs.substring(0, strs.length -1);
  }