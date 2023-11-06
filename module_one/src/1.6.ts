{
  // learning function

  // normal function

  function add(x: number, y: number): number {
    // function add(x: number, y: number = 10): number {  // we can add default value
    return x + y;
  }

  // add(2, true); // no error cause parameter type is any but if we set the type explicitely true will be error

  add(2, 7);

  // arrow function
  const addArrow = (x: number, y: number): number => x + y;

  //  a function inside an object is called method

  const poorUser = {
    name: "swarna",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
    addBalance2(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
  };
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const newArr: number[] = arr.map((elem: number): number => elem * elem);
}
