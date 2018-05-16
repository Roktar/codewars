package baby_magpies;

public class BabyMagpies {
    
    public static boolean child(final String bird1, final String bird2) {
        return ( getDifference(bird1, bird2) <= 2 ? true : false );
       }
      
      public static boolean grandchild(final String bird1, final String bird2) {
        return ( getDifference(bird1, bird2) > 2 ? true : false );
      }
      
      public static int getDifference(final String bird1, final String bird2) {
        int dif = 0;
        
        for(int i=0; i<bird1.length(); i++) {
          if(!bird1.substring(i, i+1).equals(bird2.substring(i, i+1)))
              dif++;
         }
        return dif;
      }
      
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        
        final String m1 = "BWBWBW";
        final String m2 = "BWBWBB";
        final String m3 = "WWWWBB";
        
        System.out.println(BabyMagpies.grandchild(m1, m3));
    }

}
