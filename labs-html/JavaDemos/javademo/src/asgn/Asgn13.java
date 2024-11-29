package asgn;

import java.util.Scanner;

public class Asgn13 {
    public static void main(String[] args) {
        multiply(2);
    }
    public static void multiply(int n)
    {
        // using for loop
        for(int i=1;i<11;i++)
        {
            System.out.println( n + "*" + i + "=" + n*i);
        }

        //using while loop
        int i=0;
        while (i<=10)
        {
            System.out.println( n + "*" + i + "=" + n*i);
            i++;
        }

        //using do while loop
        int j=1;
        do{
            System.out.println( n + "*" + j + "=" + n*j);
            j++;
        }while (j<=10);


    }
}
