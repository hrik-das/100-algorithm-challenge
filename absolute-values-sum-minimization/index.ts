function absoluteValuesSumMinimization(a: number[]): number {
    const is_even = a.length % 2 === 0;
    return is_even ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8]));