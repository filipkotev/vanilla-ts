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
