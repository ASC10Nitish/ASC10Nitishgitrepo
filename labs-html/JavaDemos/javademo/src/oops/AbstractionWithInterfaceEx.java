package oops;

class AbstractionWithInterfaceEx{
    public static void main(String[] args) {
        SavingsAccount1 sA=new SavingsAccount1();
        sA.displayAccountInfo();
        sA.checkAccountBalance();
        sA.transferAmount();
        sA.withdraw();

        DebitCard1 dB=new SavingsAccount1();
        dB.checkAccountBalance();
        dB.withdraw();

        NetBanking nB=new SavingsAccount1();
        nB.checkAccountBalance();
        nB.displayAccountInfo();
        nB.transferAmount();
    }
}

interface NetBanking{
    public abstract void displayAccountInfo();
    // above same as abstract void displayAccountInfo();
    // same as void displayAccountInfo();
    void transferAmount();
    void checkAccountBalance();

}

interface DebitCard1{
    public void checkAccountBalance();
    public void withdraw();
}

class SavingsAccount1 implements NetBanking,DebitCard1{

    @Override
    public void displayAccountInfo() {

    }

    @Override
    public void transferAmount() {

    }

    @Override
    public void checkAccountBalance() {

    }

    @Override
    public void withdraw() {

    }
}
