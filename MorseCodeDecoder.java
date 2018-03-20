package decode_morse;

public class MorseCodeDecoder {
    static String[][] morsecode = new String[][] {
            {".-", "A"}, {"-...", "B"}, {"-.-.","C"}, {"-..","D"}, {".","E"}, {"..-.","F"}, {"--.","G"},
            {"....","H"}, {"..","I"}, {".---","J"}, {"-.-","K"}, {".-..","L"}, {"--","M"}, {"-.","N"},
            {"---","O"}, {".--.","P"}, {"--.-","Q"}, {".-.","R"}, {"...","S"}, {"-","T"}, {"..-","U"},
            {"...-","V"}, {".--","W"}, {"-..-","X"}, {"-.--","Y"}, {"--..","Z"}
    };
    
    public static String decode(String morseCode) {
        String[] d = morseCode.split(" ");
        String res = "";
        int spacing = 0;
                
        for(String code : d) {
            if(code.length() < 1) {
                spacing++;
                continue;
            }
            
            if(spacing > 1) {
                res += " ";
                spacing = 0;
            }
            
            for(int i=0; i<26; i++) {
                if(code.equals(morsecode[i][0])) {
                    res += morsecode[i][1];
                    break;
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        String seq = ".... . -.--   .--- ..- -.. .";
                
        System.out.println(decode(seq));
    }
}
