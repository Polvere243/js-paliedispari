// recupero gli elementi dal DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const paragraph = document.querySelector("p");
console.log(input);
// al click sul bottone recupero una parola scelta dall'utente
form.addEventListener ("submit", function(event) {
    event.preventDefault();
    const userWord = input.value.trim();
    console.log(userWord);
    // controllo che la parola sia valida
        if (!userWord || userWord.length < 0) {
            alert("Devi inserire una parola!");
            return;
        }
    // invoco la funzione per determinare se la parola sia palindroma o no e costruisco il messaggio per il risultato
        const adverb = isPalindrome(userWord) ? " " : "non";
        const message = `La parola ${userWord} ${adverb} è palindroma`;
        paragraph.innerText = message;
}) 

/* // sottopongo la scelta tra pari e dispari all'utente

const userChoice = prompt("Pari o dispari?");

// chiedo all'utente di inserire un numero da 1 a 5

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// invoco la funzione per generare un numero casuale tra 1 e 5 per il computer

const cpuNumber = createRandomNumber(1, 5);

console.log(cpuNumber);
// sommo il numero scelto dall'utente con quello estratto per il computer

const sum = userNumber + cpuNumber;
console.log(sum);
// invoco la funzione per controllare se la somma sia pari o dispari

isEven (sum);
console.log(sum);
let message = "Il vincitore è ";
let isNumberEven;
if (isNumberEven = true) {
    console.log(message += "l'utente.");
} else {
    console.log(message += "il computer.");
}
 */