// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

const sumZero = arr => {
    let solution = false
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                solution = true;
            }
        }
    }  
    return solution
}

console.log(sumZero([1,2,3,-2]))
// I believe the runtime of this code would be O(n^2)

// ----------------------------------------------------

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = str => {
    for(let i = 0; i <= str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars("dermatoglyphics"))
// I believe the runtime of this code would be O(n^2)

// ----------------------------------------------------

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
    let lowerStr = str.toLowerCase();
    let letterCheck = lowerStr.match(/[a-z]/g);
    letterCheck = [...new Set(letterCheck)];
    return letterCheck.length === 26;
};

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
// I believe the runtime of this code would be O(n)

// ----------------------------------------------------

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (arr) => {
    longestWord = 0
    for(let i =0; i < arr.length; i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(["long", "longer", "longest"]))
// I believe the runtime of this code would be O(n)
