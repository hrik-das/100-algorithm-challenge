function addTwoDigits(number: number): number {
    const numbers = number.toString().split("").map(Number);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(11));