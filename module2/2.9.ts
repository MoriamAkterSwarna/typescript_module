{
  // conditional type => when a type depends on another type based  on a condition

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // type CheckVehicle  <T> = T extends "bike" | "car" | "ship" ?
  // true : false;

  // keyof == "bike" | "car" | "ship"
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HashBike = CheckVehicle<"bike">;
}
