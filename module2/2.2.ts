{
  // interface => We can declare variable with interface
  // we cannot use interface in primitive types like number, string, boolean
  // in all types of primitive types, we can use the type alias
  type User1 = {
    name: string;
    age: number;
  };
  type roll = number;
  //   interface roll number // it is not possible

  // =======  in object we can use interface and type alias both =========

  type UserWithRoll1 = User1 & { role: string };

  const users: UserWithRoll1 = {
    name: "riya",
    age: 33,
    role: "manager",
  };

  const user: User1 = {
    name: "John",
    age: 30,
  };

  interface User2 {
    name: string;
    age: number;
  }

  //   interface UserWithRoll2 extends User2 {
  interface UserWithRoll2 extends User1 {
    role: string;
  }

  const user2: User2 = {
    name: "Alina",
    age: 35,
  };
  const users2: UserWithRoll2 = {
    name: "priya",
    age: 24,
    role: "associate",
  };

  //   ====================== in array we can use interface and type alias both ==========================

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rollNumber2: Roll2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  type Add1 = (n1: number, n2: number) => number;

  interface Add2 {
    (n1: number, n2: number): number;
  }
  const add1: Add1 = (n1, n2) => n1 + n2;
  const add2: Add2 = (n1, n2) => n1 + n2;
}
