const sumZero = (arr) => {
    let solution = false
    for(let i = 0; i < arr.length; i++){
        for(let k = i+1; k < arr.length; k++){
        if(arr[i] + arr[k] === 0){
            solution = true;
            }
        }
    }  
    return solution
}
console.log(sumZero([1,2,3,-2]))
// I believe the runtime of this code would be O(n^2)

const hasUniqueChars = (str) => {
    for(let i = 0; i <= str.length; i++){
        for(let j = i+1; j <= str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
console.log(hasUniqueChars("Carrot"))
// I believe the runtime of this code would be O(n^2)

const pangram = (str) => {
    let regex = /([a-z])(?!.*\1)/gi;
    return (str.match(regex) || []).length === 26
    }
console.log(pangram("I like cats, but not mice"))
// I believe the runtime of this code would be O(n)


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
