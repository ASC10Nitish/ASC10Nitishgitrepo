package funda;

public class AbstractDataType {
   //instance variables
    byte byteVar=127;
    byte byteVar1=-128;
    short shortVar=32767;
    int intVar=-2147483647;
    long longVar= 2738787L;
    float floatVar=134.456f;
    double doubleVar=123.456d;
    char charVar='A';
    boolean boolVar=true;

    //instance method
    public void display()
    {

        System.out.println("byteVar"+byteVar);
        System.out.println("shortVar"+shortVar);
        System.out.println("intVar"+intVar);
        System.out.println("floatVar"+floatVar);
        System.out.println("charVar"+charVar);
    }
    public static void main(String [] args)
    {   //abstractDataType is reference variable
        //AbstractDataType() is constructor
        //new is keyword used to create an object
        //
        AbstractDataType abstractDataType=new AbstractDataType();

        System.out.println(abstractDataType.byteVar);
        System.out.println(abstractDataType.shortVar);
        System.out.println(abstractDataType.intVar);
        System.out.println(abstractDataType.floatVar);
        System.out.println(abstractDataType.charVar);

    }

}
