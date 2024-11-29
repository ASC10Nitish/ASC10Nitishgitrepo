package Inheritance;

public class FinalEX {
    public static void main(String[] args) {
        Base b=new Base();
        derived d=new derived();
        d.display();
        new derived().display();
    }
}
//final should be declared inside costructor or as instance variable
final class Testme{} // cannot be derived

class Base{
    public void display()
    {
        System.out.println("this is base");
    }
    public final void Basemethod()
    {
        System.out.println("this is Basemethod ");
    }
}
class derived extends Base{
    public void display()
    {   super.display();
        System.out.println("this is derived class ");
    }
}


