function allLongestStrings(array) {
    let longest_length = 0;
    let longest_words = [];

    for (let i=0; i<array.length; i++)
        if (longest_length < array[i].length)
            longest_length = array[i].length;

    for (let i=0; i<array.length; i++)
        if (array[i].length === longest_length)
            longest_words.push(array[i]);

    return longest_words;
}

console.log(allLongestStrings(["aba", "aa", "bv", "lks", "mn", "ojk"]));