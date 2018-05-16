package sorted;

public class sorted {
    
   /* public static String isSortedAndHow(int[] array) {
        int[] flag = new int[array.length];
        
        flag[0] = ( array[0] < array[1] ? 1 : 2 );
        
        for(int i=1; i<array.length; i++) {
              if(array[i-1] > array[i])
                  flag[i] = 2;
              else
                  flag[i] = 1;
                              
              if(flag[i] != flag[i-1])
                  return "no";
            }
        
        return ( max(flag) == 1 ? "yes, ascending" : "yes, descending" );
    }
    
    public static int max(int[] args) {
        int[] count = new int[2];
        
        for(int i=0; i<args.length; i++) {
            if(args[i] == 1)
                count[0]++;
            else
                count[1]++;
        }
        return ( count[0] > count[1] ? 1 : 2 );
    }*/ // 1
    public static String isSortedAndHow(int[] array) {
        int flag = ( array[0] < array[1] ? 1 : 2 );
        int sflag = 0;
        for(int i=1; i< array.length; i++) {
            
            if(array[i-1] < array[i])
                sflag = 1;
            else
                sflag = 2;
            if(flag != sflag)
                return "no";
        }
        return ( flag == 1 ? "yes, ascending" : "yes, descending" );
    } // 2
    
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        
        int[] array = new int[] {1, 3, 5, 10};
        System.out.println(sorted.isSortedAndHow(array));
    }
}
