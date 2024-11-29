package Inheritance;

public class SingleInheritance {
    public static void main(String[] args) {
//
        B b=new B();
        b.display();
    }
}
// super keyword calls base class
class A {
    public String message = "Welcome";
    public A()
    {
        System.out.println("A()");
    }
    void display()
    {
        System.out.println("This is base class");
    }
}

class B extends A {

    public B()
    {
        System.out.println("B()");
    }
    void display()
    {
        System.out.println("This is sub class");
    }

}
