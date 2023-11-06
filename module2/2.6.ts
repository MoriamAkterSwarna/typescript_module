{
  // constraints

  const addCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{
    id: number;
    name: string;
    email: string;
    devType: string;
    // hashWatch?: string;
  }>({
    id: 111,
    name: "aghg",
    email: "ag@hg.com",
    devType: "web",
  });
  const student2 = addCourse({
    id: 222,
    name: "hasi",
    email: "hasi@hg.com",
    devType: "nlwd",
    hashWatch: "apple",
  });

  const student3 = addCourse({
    id: 45848,
    name: "hsdf",
    email: "hh@hf.com",
    emai: "emni",
  });
}
