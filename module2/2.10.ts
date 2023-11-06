{
  //mapped types

  //maps
  const arrOfNumbers: number[] = [1, 2, 5];
  //   const arrOfStrings : string [] = ["a","b","c"];

  const arrayOfStrings = arrOfNumbers.map((item) => item.toString());
  console.log(arrayOfStrings);

  // map type
  type AreaNUmber = {
    height: number;
    width: number;
  };

  //   obj["name"]

  type Height = AreaNUmber["height"]; // look up type
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   }
  type AreaString<T> = {
    // [key in keyof AreaNUmber]: string;
    // [key in keyof AreaNUmber]: boolean;
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "20",
    width: 20,
  };
}
