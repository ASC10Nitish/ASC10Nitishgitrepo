package asgn;

import java.util.Scanner;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Asgn16 {
    int[] arr = new int[10];

    public void acceptElements() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 10 integers:");
        for (int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt();
        }
    }

    public void displayElementsUsingFor() {
        System.out.println("Array elements using for loop:");
        for (int i = 0; i < 10; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public void displayElementsUsingWhile() {
        System.out.println("Array elements using while loop:");
        int i = 0;
        while (i < 10) {
            System.out.print(arr[i] + " ");
            i++;
        }
        System.out.println();
    }

    public void sortArray() {
        Arrays.sort(arr);
        System.out.println("Sorted array:");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public int countOccurrences(int num) {
        int count = 0;
        for (int i : arr) {
            if (i == num) {
                count++;
            }
        }
        return count;
    }

    public void insertElementAt(int position, int num) {
        if (position >= 0 && position < 10) {
            for (int i = 9; i > position; i--) {
                arr[i] = arr[i - 1];
            }
            arr[position] = num;
        } else {
            System.out.println("Invalid position");
        }
    }

    // Fixed method to remove duplicates using HashSet
    public void Practice()
    {
            String c=" ";
            String sentence=" he is human 20 10 ";
            String[] sen=sentence.split(c);
            for(String i:sen)
            {
                if(i.matches("[a-zA-Z]+"))
                    System.out.println(i);
            }


    }

    public static void main(String[] args) {
        Asgn16 store = new Asgn16();
        store.acceptElements();
        store.displayElementsUsingFor();
        store.displayElementsUsingWhile();
        store.sortArray();
        System.out.println("Occurrences of 9: " + store.countOccurrences(9));
        store.insertElementAt(5, 25);
        store.displayElementsUsingFor();
        store.Practice();
    }
}
