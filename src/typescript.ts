/**
 * Type Annotation and Type Inference
 */
let name: string = 'John Doe';

const lowerCaseName = name.toLowerCase();
// console.log(lowerCaseName);

let age:number = 17;
const newAge = age + 1;
// console.log(newAge);

let isAdult = newAge >= 18;
isAdult = !isAdult;

// console.log(isAdult);

/**
 * Union and Any Type
 */
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// console.log('Order status: ', orderStatus);

let discount: number | string = 20;
discount = '20%';
// console.log(discount);

/**
 * Arrays and Objects
 */
let temperatures: number[] = [20, 35, 30];
// temperatures.push('hot'); // This will result in a TypeScript error

let colors: string[] = ['red', 'blue', 'orange'];
// colors.push(true); // This will result in Typescript error

let mixedArray: (string | number)[] = [1, 'two', 3];
// mixedArray.push(true); // This will result in a TypeScript error


// 1. Bike
let bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };
// bike.year = 'old'; // This will result in a TypeScript error

// 2. Laptop
let laptop: { brand: string, year: number } = { brand: 'Dell', year: 2023 };
// let laptop2: { brand: string, year: number } = {brand: 'HP'} // This will result in Typescript error that year is missing

// 3. Products
let product1 = { title: 'Shirt', price: 20};
let product2 = { title: 'pants', price: 'free'};
let product3 = { title: 'Shoes'};
let products: { title: string, price?: number | string }[] = [product1, product2, product3];
// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error

/**
 * Function params and function returns
 */
const names:string[] = ['Ivan', 'Georgi', 'Stoqn'];
function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Ivan';
if (isNameInList(nameToCheck)) {
  // console.log(`${nameToCheck} is in the list`);
} else {
  // console.log(`${nameToCheck} is not in the list`);
}


/**
 * Functions - optional and default parameters
 */
function processInput ( input: string | number ) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

// processInput(15);
// processInput('sup');


/**
 * Functions - Using Objects as Function Parameters
 */

function processData (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

// console.log(processData(10)); // Output: 100
// console.log(processData('Hello')); // Output: HELLO
// console.log(processData('Hello', { reverse: true })); // Output: OLLEH

/**
 * Type Alias
 */
type Employee = { id: number, name: string, department: string };
type Manager = {
  id: number,
  name: string,
  employees: Employee[]
};
type Staff = Employee | Manager;

function printStaffDetails (staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee from ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

// printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
// printStaffDetails(bob);

/**
 * Interface Fundamentals
 */
interface Computer {
  readonly id: number, // Cannot be changed once initialized
  brand: string,
  ram: number,
  storage?: number, // optional property
  upgradeRam(increase: number): number,
}

const myPc: Computer = {
  id: 1,
  brand: 'Dell',
  ram: 16,
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram
  }
}

myPc.storage = 512;
// console.log(myPc.upgradeRam(16));
// console.log(myPc);

/**
 * Interface Advanced - merging, extend, typeguard
 */
interface Person {
  name: string,
}

interface DogOwner extends Person {
  dogName: string,
}

interface SeniorManager extends Person {
  managePeople(): void,
  delegateTasks(): void,
}

const employee: Person | DogOwner | SeniorManager = getEmployee();
// console.log(employee);

function  getEmployee(): Person | DogOwner | SeniorManager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john'
    }
  } else if (random < 0.66) {
    return {
      name: 'Sam',
      dogName: 'Bruno'
    }
  } else {
    return {
      name: 'Bob',
      managePeople: () => name,
      delegateTasks: () => name,
      // managePeople: () => console.log('Managing people...'),
      // delegateTasks: () => console.log('Delegating tasks...'),
    }
  }
}

function isManager( obj: Person | DogOwner | SeniorManager ): obj is SeniorManager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}

/**
 * Enums and Tuples
 */
enum UserRole {
  Admin,
  Manager,
  Employee
}

type User = {
  id: number,
  name: string,
  role: UserRole,
  contact: [string, string] // Tuple: [email, phone]
}

function createUser (user: User): User {
  return user;
}

const user = createUser({
  id: 1,
  name: 'Steven',
  role: UserRole.Admin,
  contact: ['steven@gmail.bob', '091245049845']
})

// console.log(user);

/**
 * Fetch data
 */
const url = 'https://www.scourse-api.com/react-tours-project';

// Define a type for the data you're fetching.
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  // Add more fields as necessary.
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);

    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});