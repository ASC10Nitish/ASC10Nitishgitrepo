package asgn;

public class Asgn23 {
    void maxval(int a,int b,int c)
    {
        if(a>b && b>c)
            System.out.println("Greatest is "+a);
        if(b>c && b>a)
            System.out.println("Greatest is "+b);
        else
            System.out.println("Greatest is "+c);
    }
    public static void main(String[] args) {
       Asgn23 asg=new Asgn23();
       asg.maxval(30,23,45);
    }
}
