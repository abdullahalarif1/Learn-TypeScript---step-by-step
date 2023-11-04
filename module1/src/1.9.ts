
{

// type Alias


// set type globally for each similar object data
type Student = {
  name: string;
  age: number;
  contactNo?: string; //if someone has this this will work this way not foe everyone.
  gender: string;
  address: string;
};

// -----------------------------------------------------

const student1: Student = {
  name: "Abdullah",
  age: 50,
  gender: "male",
  contactNo: "01837464776",
  address: "dhaka",
};

const student2: Student = {
  name: "Mir",
  age: 40,
  gender: "male",
  address: "dhk",
};

const student3: Student = {
  name: "Mir",
  age: 40,
  gender: "male",
  address: "dhk",
};

// some example
type UserName = string
type IsAdmin = boolean
const  userName :UserName = 'Abdullah'
const  isAdmin : IsAdmin = true


// function type alias-------------

type AddNum = (num1: number, num2: number) => number

const add: AddNum = (num1, num2) => num1 + num2


}