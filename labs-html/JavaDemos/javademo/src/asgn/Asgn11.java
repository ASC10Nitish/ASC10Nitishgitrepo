package asgn;

public class Asgn11 {
    public static void main(String[] args) {
        Overloading overloading=new Overloading();
        System.out.println(overloading.add((short)2,(short)3));
        System.out.println(overloading.add((float)3.4,(double)3.444));
    }
}
class Overloading
{
    short add(short a,short b)
    {
        return (short) (a+b);
    }

    double add(float a,double b)
    {
        return (double) (a+b);
    }
}