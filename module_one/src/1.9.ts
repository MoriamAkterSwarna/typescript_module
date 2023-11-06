{
  // type alias
  //type alias in object
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "mohammed",
    age: 21,
    gender: "male",
    contactNo: "784983",
    address: "uganda",
  };
  const student2: Student = {
    name: " mir ",
    age: 25,
    gender: "male",
    address: "dsdsd",
  };

  // type alias in string
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "mohammed";
  const isAdmin: IsAdmin = true;

  //type alias in function

  type Add = (n1: number, n2: number) => number;

  const add: Add = (n1, n2) => n1 + n2;
  const subtract: Add = (n1, n2) => n1 - n2;
}
