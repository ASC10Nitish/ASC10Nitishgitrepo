package funda;

public class DefaultConstructor {

    int intVar;
    float floatVar;
    boolean booleanVar;

    public DefaultConstructor() {
        intVar = 10;
        floatVar = 20;
        booleanVar = true;
    }

    public DefaultConstructor(int intVar,float floatVar,boolean booleanVar){
        intVar=intVar;
        floatVar=floatVar;
        booleanVar=booleanVar;
    }

    @Override
    public String toString() {
        return "DefaultConstructor{" +
                "intVar=" + intVar +
                ", floatVar=" + floatVar +
                ", booleanVar=" + booleanVar +
                '}';
    }

    public static void main(String[] args) {

        DefaultConstructor defaultConstructor = new DefaultConstructor();
        System.out.println(defaultConstructor.intVar);
        System.out.println(defaultConstructor.floatVar);
        System.out.println(defaultConstructor.booleanVar);

        Thread thread=Thread.currentThread();
        System.out.println(thread);
        System.out.println(thread.getName());

        defaultConstructor=new DefaultConstructor();
        System.out.println(defaultConstructor);
    }


}
