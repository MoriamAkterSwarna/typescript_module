{
  // function with generics

  //   const createArray = (param: string): string[] => {
  //     return [param];
  //   };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  //   const res1 = createArray("Bangladesh");
  //   const resGeneric = createArrayWithGeneric(true);
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  //   const resGenericObj = createArrayWithGeneric<{ id: number; name: string }>({
  //     id: 111,
  //     name: "rjr",
  //   });
  // }
  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 111,
    name: "rjr",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, number>("Bangladesh", 222);

  const resGenericTuple = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    {
      name: "Asia",
    }
  );

  const addCourse = <T>(student: T) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse({
    name: "aghg",
    email: "ag@hg.com",
    devType: "web",
  });
  const student2 = addCourse({
    name: "hasi",
    email: "hasi@hg.com",
    devType: "nlwd",
    hashWatch: "apple",
  });
}
