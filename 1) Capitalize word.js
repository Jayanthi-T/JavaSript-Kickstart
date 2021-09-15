Capitalize word
Complete the function capitalize such that it capitalizes the name parameter it receives. 
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints if it's still not clear.

/**
 * @param {string} word
 */
function capitalize(word) {
    let f = word.substring(0,1);
    let l = word.substring(1,word.length);
    return f.toUpperCase()+l.toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
