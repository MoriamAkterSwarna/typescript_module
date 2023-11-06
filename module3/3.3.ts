{
  //  type guard => this is a way to check the type of a variable

  // typeof => type guard

  type Alphaneomeric = string | number;
  const add = (
    // param1: string | number,
    // param2: string | number
    //   ): string | number => {
    param1: Alphaneomeric,
    param2: Alphaneomeric
  ): Alphaneomeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const res1 = add(1, 2);
  console.log(res1);

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`this is ${user.name} and his role is ${user.role}`);
    } else {
      console.log(`this is ${user.name} and he is a normal user`);
    }
  };
  const normalUser: NormalUser = {
    name: "Mr Normal",
  };

  const adminUser: AdminUser = {
    name: "Mr Admin",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
