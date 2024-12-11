function addition(x: number, y: number): number {
    return x + y;
}

console.log(addition(1, 2));
console.log(addition(2, 4));

function additionOfNumbers(...numbers: number[]): number {
    let result = 0;
    numbers.forEach(number => result += number);
    return result;
}

console.log(additionOfNumbers(1, 2));
console.log(additionOfNumbers(1, 2, 3));
console.log(additionOfNumbers(1, 2, 3, 4, 5, 6));