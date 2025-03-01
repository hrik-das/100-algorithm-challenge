function allLongestStrings(array) {
    var longest_length = 0;
    var longest_words = [];

    array.forEach(function (word) {
        return longest_length = longest_length < word.length ? word.length : longest_length;
    });
    
    
    array.forEach(function (word) {
        if (longest_length === word.length)
            longest_words.push(word);
    });
    
    return longest_words;
}

console.log(allLongestStrings(["aba", "aa", "bv", "lks", "mn", "ojk"]));