{
  // Interfaces Vs Type alias

  // Object --> array --> function

  // Object ------------------------>

  // extend with type alias or interfaces
  type UserRole = User1 & { role: string };
  interface UserWithRole extends User2 {
    role: string;
  }

  // interface also can using instead of type alias
  interface User2 {
    name: string;
    age: number;
  }

  // type alias
  type User1 = {
    name: string;
    age: number;
  };

  //----
  const user1: UserWithRole = {
    name: "Abdullah",
    age: 100,
    role: "manager",
  };

  // Array ------------------------>

  // declare as an type alias or interfaces
  type Roll1 = number[]; // recommend way !!
  interface Roll2 {
    [index: number]: number;
  }

  // ----
  const rollNumber: Roll1 = [1, 3, 4];

  // function ------------------------>

  //  declare as an type alias or interfaces for function
  type Add = (num1: number, num2: number) => number; // recommend way !!
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;


  
}