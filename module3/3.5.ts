{
  // access modifier
  // public => we can access it from anywhere
  // private => we can access it only from inside the class
  // protected => we can access it from inside the class and its child class

  class BankAccount {
    id: number;
    protected name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      console.log(`${this.name} has ${this._balance} taka`);
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.id;
      this.name;
    }
  }

  const account1 = new BankAccount(111, "Mr A", 1000);
  account1.addDeposite(0);

  const myBalance = account1.getBalance();
  console.log(myBalance);
}
