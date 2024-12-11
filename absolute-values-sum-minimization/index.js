function absoluteValuesSumMinimization(a) {
    const is_even = a.length % 2 === 0;
    
    if (is_even)
        return a[a.length / 2 - 1];
    else
        return a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8]));