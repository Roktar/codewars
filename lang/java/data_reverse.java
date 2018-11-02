import java.util.*;

public class Kata {
  public static int[] DataReverse(int[] data) {    
    return remakeIntArray(getArrayList(data, 8), 8);
  }
  
  public static List<int[]> getArrayList(int[] origin, int split_line) {
    List<int[]> list = new ArrayList<int[]>();
    int[] sub_array = new int[split_line];
    int count = 0;
    
    for(int i=0; i<origin.length; i++) {
      sub_array[count] = origin[i];
      
      if(count < split_line-1) {
        count++;
        continue;
      }
      
      list.add(sub_array);
      sub_array = new int[8];
      count = 0;
    }
    return list;
  }
  
  public static int[] remakeIntArray(List<int[]> list, int split_line) {
    int[] new_array = new int[list.size()*split_line];
    int count = 0;
    
    for(int i = list.size() -1; i > -1; i--) {
      for(int v : list.get(i))
        new_array[count++] = v;
    }
    
    return new_array;
  }
  
  /* test */
  public static void print(int[] arr) {
    for(int i=0; i<arr.length; i++)
      System.out.print(arr[i] + " ");
    System.out.println();
  }
  
  public static void print(List<int[]> list) {
    for(int[] arr : list)
      print(arr);
  }
}