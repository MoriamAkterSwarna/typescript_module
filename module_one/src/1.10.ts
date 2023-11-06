{
  // union type

  type FrontendDeveloper = "fikibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGrp: "A+" | "B+" | "AB+" | "O+";
  };

  const user1: User = {
    name: "mohammed",
    gender: "male",
    bloodGrp: "A+",
  };

  // intersection type
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDev = FrontendDev & BackendDev;

  const fullstackDeveloper: FullstackDev = {
    skills: ["html", "css", "js", "react", "nodejs", "mongodb"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
