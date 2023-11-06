{
  // data types

  //number data types
  //   const a : number = 20;
  //   const b : number = 10;

  //   console.log(a + b);

  //string
  const name: string = "mariam";
  //   console.log(name);

  //boolean
  const isTrue: boolean = true;
  //   console.log(isTrue);

  //undefined
  const z: undefined = undefined;
  //   console.log(z);

  //null
  const x: null = null;
  //   console.log(null);

  //any
  var p;
  const y: any = true;

  //array
  const arr: string[] = ["mariam", "mohammed", "ali"];
  arr.push("hassan");
  //   arr.push(10);
  //   console.log(arr.push("hassan"));

  const arr1: number[] = [1, 2, 3, 4, 5];
  arr1.push(6);
  //   arr1.push("jaj");
  //   console.log(arr1);

  //tuple
  const array2: [string, number, boolean] = ["mariam", 20, true];
  //   console.log(array2);
}

{
  //object

  const user: {
    name: string;
    age: number;
    isStudent?: boolean;
    address: {
      city: string;
      country: string;
    };
  } = {
    name: "mariam",
    age: 20,
    // isStudent: true,
    address: {
      city: "karachi",
      country: "pakistan",
    },
  };

  //   console.log(user);
}

{
  //functions

  function power(n1: number, n2: number): number {
    return Math.pow(n1, n2);
  }
  //   console.log(power(2, 3));

  //arrow function

  const powArrow = (n1: number, n2: number): number => Math.pow(n1, n2);

  //   console.log(powArrow(2, 4));

  const car: {
    name: string;
    color: string;
    model: number;
    isAvailable: boolean;
    price: number;
    getCarDetails: (balance: number) => number;
  } = {
    name: "corolla",
    color: "black",
    model: 2019,
    isAvailable: true,
    price: 2000000,
    getCarDetails: (balance: number): number => {
      if (balance < car.price) {
        // const remainingBalance = this.price - balance;
        return car.price - balance;
      }
      return 0;
      //   return `name : ${car.name}, color : ${car.color}, model : ${car.model}, isAvailable : ${car.isAvailable}, price : ${car.price}`;
    },
  };
  //   console.log(car.getCarDetails(1000000));
}

{
  // spread operator
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];

  //   console.log(arr1.push(...arr2));
  //   console.log(arr1);
  //   console.log(arr2);

  const arr3 = [...arr1, ...arr2];
  //   console.log(arr3);

  //rest operator
  const greetFriends = (...friends: string[]) => {
    // for (const friend of friends) {
    //   console.log(friend);
    // }

    // friends.forEach((friend) => console.log(`hi ${friend}`));

    return friends;
  };

  const fri = greetFriends(
    "mohammed",
    "ahmed",
    "ali",
    "hassan",
    "hussain",
    "mariam"
  );
  //   console.log(fri);
  console.log(
    greetFriends("mohammed", "ahmed", "ali", "hassan", "hussain", "mariam")
  );
}
