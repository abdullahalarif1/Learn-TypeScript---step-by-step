// function type

// normal function
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}

addNum(2, 3);

// arrow function
const add = (num1: number, num2: number): number => num1 + num2;


// object --> function --> method

const poorUser: {
  readonly name: string;
  balance: number;
  addBalance: (balance: number) => string;
} = {
  name: "abd",
  balance: 0,
  addBalance(balance: number): string {
    return `This is balance ${this.balance + balance}`;
  },
};

