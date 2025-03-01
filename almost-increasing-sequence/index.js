function almostIncreasingSequence(sequence) {
    let violations = 0;

    for (let i=1; i<sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            violations++;

            if (violations > 1 || (i > 1 && i < sequence.length - 1 && sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])) {
                return false;
            }
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));