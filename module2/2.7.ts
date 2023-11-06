{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle; //automatically
  const person1: Owner2 = "car";

  const user = {
    name: "mr X",
    age: 34,
    address: "dhaka",
  };
  //   user[age] = 45;

  //   const getPropertyValue = <X, Y extends "name" | "age" | "address">(obj: X, key: Y) => {
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user1 = {
    name: "mr X",
    age: 34,
    address: "dhaka",
  };

  const car = {
    model: "toyota 45sb",
    year: 2019,
  };
  const result = getPropertyValue(user1, "name");
  const result2 = getPropertyValue(car, "model");
  //   obj[key] = 26
}
