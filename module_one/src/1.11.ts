{
  //ternary operator  || optional chaining || nullish coalescing operator

  const age: number = 15;

  if (age > 20) {
    console.log("adult");
  } else {
    console.log("child");
  }

  //ternary
  const isAdult = age > 18 ? "adult" : "child";
  console.log(isAdult);

  // nullish coalescing operator
  // it is used when we want to make dicision based on null or undefined

  //   const isAuthenticated = null;
  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "guest";

  const result2 = isAuthenticated ? isAuthenticated : "guest";

  console.log({ result1 });
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      roadNo: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "mohammed",
    address: {
      city: "dhaka",
      roadNo: "27 A",
      presentAddress: "mirpur",
    },
  };

  //   const permanentAddress = user?.address?.permanentAddress;
  const permanentAddress =
    user?.address?.permanentAddress ?? " no permanent address";
  console.log({ permanentAddress });
}
