{
  // utility types
  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNO: string;
  };

  //   type Name =  Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //required

  type PersonRequired = Required<Person>;

  //partial
  type PersonPartial = Partial<Person>;

  //readonly

  type PersonReadonly = Readonly<Person>;
  const personReadonly: PersonReadonly = {
    name: "sajjad",
    age: 20,
    contactNO: "1234567890",
  };

  //   personReadonly.name = "ahfa";

  //record type

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type EmptyOb = Record<string, number>;
  const emptyObj: Record<string, unknown> = {};

  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    // g: 8
  };
}
