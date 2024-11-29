package collections;
import java.util.*;
public class ArrayListEx {
    public static void main(String[] args) {
        ArrayList1();
    }
    private static void ArrayList1(){
        ArrayList<String> colors=new ArrayList<>(5);
        colors.add("A");
        colors.add("B");
        colors.add("C");
        colors.add("D");
        colors.add("E");
        colors.add("F");
        colors.add("G");
        System.out.println(colors);
        colors.add(2,"H");
        colors.get(3);
        colors.size();
        colors.isEmpty();
        colors.contains("A");
        colors.lastIndexOf("D");

    }
}
