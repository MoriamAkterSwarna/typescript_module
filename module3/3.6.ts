{
  // getter => access property
  // setter => change property
  class BankAccount {
    id: number;
    protected name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // getBalance() {
    //   console.log(`${this.name} has ${this._balance} taka`);
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // setter

    set balance(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const account1 = new BankAccount(111, "Mr A", 1000);
  //   account1.addDeposite(20);

  //   const myBalance = account1.getBalance();
  account1.balance = 20;
  const myBalance = account1.balance;
  console.log(myBalance);
}
