const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
//slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

//splice to remove element from an array

//const numberSpliced = numbers.splice(4,2);
// console.log(numberSpliced);
// console.log(numbers)

//
// const numberSliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
// console.log(numberSpliced2);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numberSpliced2);
console.log(numbers);