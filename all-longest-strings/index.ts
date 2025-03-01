function allLongestStrings(array: string[]): string[] {
    let longest_length = 0;
    let longest_words = [];

    array.forEach(word => longest_length = longest_length < word.length ? word.length : longest_length);
    
    array.forEach(word => {
        if (longest_length === word.length)
            // @ts-ignore
            longest_words.push(word);
    });

    return longest_words;
}

console.log(allLongestStrings(["aba", "aa", "bv", "lks", "mn", "ojk"]));