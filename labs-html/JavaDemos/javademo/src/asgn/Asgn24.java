package asgn;


import java.util.HashMap;
import java.util.Scanner;

public class Asgn24 {


    void disp(int num) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        map.put(4, "Four");
        map.put(5, "Five");
        map.put(6, "Six");
        map.put(7, "Seven");
        map.put(8, "Eight");

        String numStr=Integer.toString(num);
        for(int i=0;i<numStr.length();i++)
        {
            int digit=numStr.charAt(i)-'0';
            System.out.println(map.get(digit));
        }

    }
    public static void main(String[] args) {
        Asgn24 as=new Asgn24();
        System.out.println("Enter 3 digit number ");
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();

        if(num>=100 && num<=999)
        {
            System.out.println("The number is valid ");
            as.disp(num);
        }
        else {
            System.out.println("Enter a 3 digit number ");
            num=sc.nextInt();
        }


    }
}
