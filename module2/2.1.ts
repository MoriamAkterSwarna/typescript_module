{
  //type assertion => when you know more than TS

  let anything: any;

  anything = "hello";

  //   ( anything as string).
  anything = 4647;
  //   (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const converted = parseFloat(value) * 1000;
      return ` The converted value ${converted}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(13) as number;
  const result2 = kgToGm("14") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
