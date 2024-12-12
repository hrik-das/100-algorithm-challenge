function addTwoDigits(number) {
    const numbers = number.toString().split("").map(Number);
    
    const result = numbers.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);

    return result;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(11));