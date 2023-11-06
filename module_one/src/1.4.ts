// Basic data type
// when we declare a variable, we can also specify the type of the value the variable can hold it is called explicit typing
// if we don't specify the type, it is called implicit typing
let firstName: string = "John"; // explicit

let roll: number = 123; // explicit

let isPublished: boolean = true; // explicit

let z: undefined = undefined;

let y: null = null;

let d; // implicit  => ts will assume it any type data
let e: number;

// Array

let friends: string[] = ["John", "Jane", "Mary", "Chris"];

friends.push("Jack");
// friends.push(8);  => return error
let rollNumbers: number[] = [1, 2, 3, 4, 5];
// rollNumbers.push("ss");  => return error

// Tuple  ====> array => order => type of values

let coordinates: [number, number] = [1, 5];

// let ageName : [number, string] = [50, "John"];
let ageName: [number, string, boolean] = [50, "John", true];
