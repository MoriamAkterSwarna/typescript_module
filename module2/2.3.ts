{
  //generic types => when we generalize types or functions or classes

  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;
  //   const rollNumbers : number[] = [1,2,3];
  //   const rollNumbers: Array<number> = [1, 2, 3];
  const rollNumbers: GenericArray<number> = [1, 2, 3];

  //   const mentors : string[] = ['riya','priya','alina'];
  //   const mentors: Array<string> = ["riya", "priya", "alina"];
  const mentors: GenericArray<string> = ["riya", "priya", "alina"];

  //   const boolArray : boolean[] = [true,false,true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
    role?: string;
  }
  // type User = {
  //   name: string;
  //   age: number;
  //   role?: string;
  // };

  // const user: GenericArray<{ name: string; age: number; role?: string }> = [
  const user: GenericArray<User> = [
    {
      name: "riya",
      age: 33,
    },
    {
      name: "priya",
      age: 24,
    },
    {
      name: "alina",
      age: 35,
    },
    {
      name: "tina",
      age: 34,
      role: "associate",
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr X", "Mr Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    12,
    {
      name: "riya",
      email: "riya@bd.com",
    },
  ];
}

// 2d array
const twoDArray: number[][] = [[1, 2], [5, 6], [23]];

//3d array
const roles: number[][][] = [
  [[1, 2]],
  [
    [5, 6],
    [11, 22, 33],
  ],
  [[23]],
];
