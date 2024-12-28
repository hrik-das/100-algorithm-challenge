function almostIncreasingSequence(sequence) {
    let violations = 0; // Count of problematic elements

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            violations++; // Found a violation

            // If removing one of the current or previous elements doesn't fix it, return false
            if (
                violations > 1 || 
                (i > 1 && i < sequence.length - 1 && sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
            ) {
                return false;
            }
        }
    }

    return true; // At most one violation, sequence is fixable
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // Output: false
console.log(almostIncreasingSequence([1, 3, 2]));    // Output: true
