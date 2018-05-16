function hexStringToRGB(hexString) {
    let getValue = function(str) {
        let code = [];
        for(let i = 0; i<str.length; i++) {
            switch(str[i]) {
                case 'A' :
                case 'a' :
                    code[i] = 10; break;
                case 'B' : 
                case 'b' :
                    code[i] = 11; break;
                case 'C' :
                case 'c' :
                    code[i] = 12; break;
                case 'D' : 
                case 'd' :
                    code[i] = 13; break;
                case 'E' :
                case 'e' :
                    code[i] = 14; break;
                case 'F' :
                case 'f' :
                    code[i] = 15; break;
                default :
                    code[i] = parseInt(str[i]);
            }
        }
        return code[0] * 16 + code[1];
    };

    return {'r':getValue(hexString.substr(1, 2)), 
            'g':getValue(hexString.substr(3, 2)), 
            'b':getValue(hexString.substr(5, 2))
            };
  }

  console.log(hexStringToRGB("#bEAdeD"));