package Inheritance;

public class MultiLevelInheritance {
    public static void main(String[] args) {
        A1 a=new A1();
        B1 b=new B1();
        C1 c=new C1();
    }
}

class A1{
    void displayA1(){
        System.out.println("A1");
    }
}
class B1 extends A1{
    void displayB1(){
        System.out.println("B1");
    }
}
class C1 extends B1{
    void displayA1(){
        System.out.println("C1");
    }
}
