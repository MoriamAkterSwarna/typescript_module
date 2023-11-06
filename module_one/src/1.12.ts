{
  // nullable types

  const searchName = (value: string | null) => {
    //nullable type
    if (value) {
      console.log("searching");
    } else {
      console.log("nothing to search");
    }
  };

  //   searchName("mohammed");
  searchName(null);

  //unknown typeof

  const getSpeedMeter = (value: unknown) => {
    if (typeof value === "number") {
      console.log(`${value} km/h`);
      const speed = (value * 1000) / 3600;
      console.log(`${speed} ms^-1`);
    } else if (typeof value === "string") {
      const valueNum = value.split(" ");
      console.log(valueNum);
      const [values, unit] = valueNum;
      console.log(values, unit);
      const convertedSpeed = (parseFloat(values) * 1000) / 3600;
      console.log(`${convertedSpeed} ms^-1`);
    } else {
      console.log("invalid input");
    }
  };
  //   getSpeedMeter(60);
  getSpeedMeter(`1000 kmh^-1`);

  //never type  => it is used when we know that the function will never return anything
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hoygayi");
}
