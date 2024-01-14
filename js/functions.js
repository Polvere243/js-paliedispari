
/**
 * It checks whether a word is palindrome or not
 * @param {string} text1 is the word to check
 */

function isPalindrome (text1) {
    text1 = text1.toLowerCase();
    let text2 = "";
    for (let i = text1.length - 1; i >= 0; i--){
        text2 += text1[i];
        console.log(text2);
    }
    return text1 === text2;
}



/**
 * Generates a random number from 1 to 5
 * @param {number} min the minimum number 
 * @param {number} max the maximum number
 * @returns random number
 */

function createRandomNumber (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}


/**
 * Checks whether a given number is even or odd
 * @param {number} num is the number to check
 * @returns boolean
 */
function isEven (num) {
    return num % 2 === 0;
}
