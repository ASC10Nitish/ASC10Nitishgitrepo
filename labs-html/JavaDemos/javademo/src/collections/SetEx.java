package collections;

import java.util.HashSet;

public class SetEx {
    public static void main(String[] args) {

        HashSet<String> colors=new HashSet<>();
        colors.add("A");
        colors.add("B");
        colors.add("C");
        colors.add("D");
        colors.add("E");
        colors.add("F");
        colors.add("G");
        System.out.println(colors);
        colors.size();
        colors.isEmpty();
        colors.contains("A");

    }

}
