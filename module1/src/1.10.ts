{
  // union types --> | or

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  // | or means all must me there
  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "a+" | "o+" | "b+" | "o-";
  };

  const user: User = {
    name: "Abdullah",
    email: "abdullah@gmail.com",
    gender: "male",
    bloodGroup: "o+",
  };

  // --------------------Intersection types --> & and---------------

  type FrontDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type backDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullDeveloper = FrontDeveloper & backDeveloper;

  // & means all must me there
  const fullStackDeveloper: FullDeveloper = {
    skills: ["html", "css", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
