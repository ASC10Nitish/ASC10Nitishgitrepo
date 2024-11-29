
package funda;
import java.util.*;
import java.util.List;

public class ArrayEx {

    private void primitiveArray()
    {
        int[] intArray =new int[5];
        intArray[0]=10;
        intArray[1]=20;
        intArray[2]=30;
        intArray[3]=40;
        intArray[4]=50;

        for (int j : intArray) {
            System.out.println(j);
        }

    }

    private void referenceArray()
    {
        String [] names=new String[3];
        names[0]="abc";
        names[1]="ABC";
        names[2]="AbC";
        for(String name : names)
        {
            System.out.println(name);
        }

    }



    public static void main(String [] args)
    {
        ArrayEx arrayEx=new ArrayEx();
        arrayEx.primitiveArray();

        arrayEx.referenceArray();


    }
}
