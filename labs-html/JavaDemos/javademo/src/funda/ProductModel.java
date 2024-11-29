package funda;
//model consists private variables accessed using settters and getters
//toString is related
//this.variable will hold the assigned value at declaration as private int var=100;
class ProductModelEx
{
    private String productId="ISP001";
    private String productName="Laptop";
    private int productPrice=1000;

    public String toString()
    {
        return productId+productName;
    }

    public void setproductPrice(int productPrice)
    {
        if(productPrice<0 || productPrice>100000)
        {
            System.out.println("Invalid price");
            return;
        }
        this.productPrice=productPrice;
    }

    public int getProductPrice() {
        return this.productPrice;
    }
    public String getProductId()
    {
        return this.productId.substring(2);
    }
}

public class ProductModel {
    public static void main(String[] args) {
        ProductModelEx pmx=new ProductModelEx();
//        System.out.println(pmx);
//        pmx.setproductPrice(2000);
//        System.out.println(pmx);
//        pmx.setproductPrice(10000000);
        System.out.println(pmx.getProductPrice());
        System.out.println(pmx.getProductId());
    }

}

