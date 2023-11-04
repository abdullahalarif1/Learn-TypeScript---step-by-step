{
  // function with generics

    const createArray = (param: string): string[] => {
      return [param];
    };

    const result1 = createArray("Bangladesh");

    // ------>
    // function with generic handle dynamically
    const createArrayWithGeneric = <T>(param: T): T[] => {
      return [param];
    };
    const resultGeneric = createArrayWithGeneric<string>("Bangladesh");

    const resultGenericObj = createArrayWithGeneric<{id: number; name: string}>({ id: 222, name: "Mr. Abd" });

    // ------>
    // function with Tuple generic handle dynamically
    const createArrayWithTupleGeneric = <T, Q>(param: T, param2: Q): [T, Q] => {
      return [param, param2];
    };

    const resultTuple1 = createArrayWithTupleGeneric<string, number>("Bangladesh", 2222);

    const resultTupleGenericObj = createArrayWithTupleGeneric<string, {id:number; name: string;}>('Abdullah', { id: 222, name: "Mr. Abd" });




  // Another example ------------>
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
  }>({ name: "Mr.x", email: "x@gmail.com", devType: "NLWD" });

  const student2 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
    hasWatch: string;
  }>({
    name: "Mr.y",
    email: "y@gmail.com",
    devType: "NLWD",
    hasWatch: "Apple watch",
  });
}
