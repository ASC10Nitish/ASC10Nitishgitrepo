package Inheritance;

public class HierarchicalInheritance {
    public static void main(String[] args) {
        Phone p=new Phone();
        SmartPhone sp=new SmartPhone();
        FeaturePhone fp=new FeaturePhone();
    }
}
class Phone{
    void call()
    {
        System.out.println("Calllig ...");
    }
}
class SmartPhone extends Phone{
    void browse()
    {
        System.out.println("Browsing.....");
    }
}
class FeaturePhone extends Phone{
    void text()
    {
        System.out.println("texting....");
    }
}
