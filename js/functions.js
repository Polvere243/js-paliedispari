
/**
 * It checks whether a word is palindrome or not
 * @param {string} text1 is the word to check
 */

function isPalindrome (text1) {
    let text2 = "";
    for (let i = text1.length - 1; i >= 0; i--){
        text2 += text1[i];
    }
    let message = "La parola"
    text2.toLowerCase() === text1.toLowerCase() 
    ? paragraph.innerText = message += "è palindroma" 
    : paragraph.innerText = message += "non è palindroma";
    
}





function createRandomNumber (num1, num2) {
    const randomNumber = Math.floor(Math.randome * (num2))+1;
}