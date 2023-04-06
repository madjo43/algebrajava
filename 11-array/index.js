const numbers = [1, 2 , 3];
numbers.push(4);
const newNumbers = [] ;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    newNumbers.push(numbers[i] * 10);
}

console.log(newNumbers.join(`_`));