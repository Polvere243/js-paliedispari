// usare un prompt per chiedere una parola all'utente
const input = document.querySelector("input");
const checkButton = document.querySelector(".btn");
const paragraph = document.querySelector("p");

checkButton.addEventListener ("click", function() {
    const userWord = input.value.trim();
        if (!userWord || userWord.length < 0) {
            console.error("Devi inserire una parola!");
            return;
        }
        isPalindrome(userWord);
}) 


    

    
        
    


 




/* Secondo esercizio */

/* const userChoice = prompt("Pari o dispari?").trim();

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
 */


