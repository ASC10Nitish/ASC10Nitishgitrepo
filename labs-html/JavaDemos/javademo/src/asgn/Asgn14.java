package asgn;

public class Asgn14 {
    public static void main(String[] args) {
        String input="He is 1 and 2";

    }
    public static void disp(String input)
    {   char c;
        int count=0;
        for(int i=1;i<input.length();i++)
        {
            if(input.charAt(i-1)==' ' && input.charAt(i)==' ')
            {
             count++;
            }
        }

    }
}
