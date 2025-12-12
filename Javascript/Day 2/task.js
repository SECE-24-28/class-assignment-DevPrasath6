// Convert "hello world" to "Hello World"
let inputStr = "hello world";
let str1 = inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();
str1 = str1.slice(0, 6) + str1.charAt(6).toUpperCase() + str1.slice(7);
console.log(str1);

// Write a function that returns the number of words in "I love JavaScript".
function countWords(str) {
    return str.split(" ").length;
}
let str = "I love JavaScript";
console.log(countWords(str));

// Convert "my name is John" into "my-name-is-John".

let inputStr2 = "my name is John";
let str2 = inputStr2.split(" ").join("-");
console.log(str2);

//From "programming", print duplicate characters (like r, g, n) using normal methods

let str3 = "programming";
let result = "";
for (let i = 0; i < str3.length; i++) {
    for (let j = i + 1; j < str3.length; j++) {
        if (str3[i] === str3[j]) {
            result += str3[i];
        }
    }
}
console.log(result);

//From "John Doe Smith", return "JDS"
let str4 = "John Doe Smith";
let words = str4.split(" ");
let initials = "";
for (let i = 0; i < words.length; i++) {
    initials += words[i].charAt(0);
}
console.log(initials);

// Find Longest Word Find the longest word in a sentence (words separated by spaces). Input: "The quick brown fox" —+ Output: "quick"

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let str5 = "The quick brown fox";
console.log(findLongestWord(str5));

// Remove Duplicates Remove duplicate characters from a string, keeping only the first occurrence.Input: "programmmg" —+ Output: "progamin"

function removeDuplicates(str) {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
let str6 = "programming";
console.log(removeDuplicates(str6));

// Count Word Frequency Count how many times each word appears in a string.Input: "hello world hello" —i Output: {hello: 2, world: l} using simple methods

function countWordFrequency(str) {
    let words = str.split(" ");
    let frequency = {};
    for (let word of words) {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }
    return frequency;
}
let str7 = "hello world hello";
console.log(countWordFrequency(str7));
