package funda;
//java.lang.Object

//class Car{
//    String type;
//    int price;
//    Car(){
//        type="Gasoline";
//        price=10000;
//    }
//    public void display()
//    {
//        System.out.println(type);
//        System.err.println(price);
//    }
//    @Override //annotation
//    public String toString(){
//
//        String message ="type of car "+type+"\n price of car "+price;
//        return message;
//    }
//}
//
//
////by default class extends object which has functions
//public class ClassesAndObjects {
//
//    public static void main(String [] args)
//    {
//        Car car=new Car();
//        car.display();
//
//    }
//
//
//
//}

// code to print details of issue using id

//
//import java.util.Date;
//import java.util.Scanner;
//
//class Issue
//{
//    int id;
//    String status;
//    Priority priority;
//    Date date;
//
//    enum Priority{HIGH,LOW,MEDIUM};
//
//    public Issue(int id, String status, Priority priority, Date date)
//    {
//        this.id = id;
//        this.status = status;
//        this.priority = priority;
//        this.date = date;
//    }
//
//    public void display()
//    {
//        System.out.println("id is : "+id);
//        System.out.println("status is : "+status);
//        System.out.println("priority is : "+priority);
//        System.out.println("date is : "+date);
//    }
//}
//
//public class ClassesAndObjects {
//    public static void main(String [] args) {
//        Scanner scanner=new Scanner(System.in);
//        Issue [] issue=new Issue[3];
//        issue[0]=new Issue(1,"GOOD",Issue.Priority.HIGH,new Date(2024,1,2));
//        issue[1]=new Issue(2,"BAD",Issue.Priority.MEDIUM,new Date(2023,2,3));
//        issue[2]=new Issue(3,"AVERAGE",Issue.Priority.LOW,new Date(2022,3,4));
//
//        int i =0;
//        while(i<3) {
//            System.out.println("ENTER THE ID : ");
//            int num = scanner.nextInt();
//            if (num == 1)
//                issue[0].display();
//            if (num == 2)
//                issue[1].display();
//            if (num == 3)
//                issue[2].display();
//            i++;
//        }
//
//    }
//}



import java.util.Date;
import java.util.Scanner;

class Issue
{
    int id;
    String status;
    Priority priority;
    Date date;

    enum Priority{HIGH,LOW,MEDIUM};

    public Issue(int id, String status, Priority priority, Date date)
    {
        this.id = id;
        this.status = status;
        this.priority = priority;
        this.date = date;
    }

    public void display()
    {
        System.out.println("id is : "+id);
        System.out.println("status is : "+status);
        System.out.println("priority is : "+priority);
        System.out.println("date is : "+date);
    }
}

public class ClassesAndObjects {
    public static void main(String [] args) {
        Scanner scanner=new Scanner(System.in);
        Issue [] issue=new Issue[3];
        System.out.println("Start adding Issues details");

        for(int i=0;i<3;i++) {

            System.out.println("Enter the id ");
            int num=scanner.nextInt();
            issue[i].id=num;

            System.out.println("Enter the status ");
            String sta=scanner.nextLine();
            issue[i].status=sta;

//            System.out.println("Enter the priority ");
//            String priority=scanner.nextLine();
//
//
//            System.out.println("Enter the date ");
//            String date=scanner.nextLine();

            System.out.println("Enter the next issues details ");

            
        }


    }
}
