function addition(x, y) {
    return x + y;
}

console.log(addition(1, 2));
console.log(addition(2, 3));

function additionOfNumbers(...numbers) {
    let result = 0;

    numbers.forEach((number) => {
        result = result + number
    });

    return result;
}

console.log(additionOfNumbers(1, 2));
console.log(additionOfNumbers(1, 2, 3));
console.log(additionOfNumbers(1, 2, 3, 4, 5));