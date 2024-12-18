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
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
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

processInput(15);
processInput('sup');