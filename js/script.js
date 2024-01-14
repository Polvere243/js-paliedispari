// recupero gli elementi dal DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const paragraph = document.querySelector("p");
const element = document.querySelector(".even-odd");
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
        // stampo il risultato in pagina
        paragraph.innerText = message;
}) 


/* ----------------------------------------------------- */

// sottopongo la scelta tra pari e dispari all'utente

const userChoice = prompt("Pari o dispari?").trim().toLowerCase();
console.log("scelta: ", userChoice);
// chiedo all'utente di inserire un numero da 1 a 5

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(("numero dell'utente: ", userNumber));
if (isNaN(userNumber) || userNumber < 0){
    alert("Fratm, devi inserire un numero!");
}

if (userChoice !== "pari" && userChoice !== "dispari"){
    alert("Fratm, devi scegliere tra pari e dispari");
}


// invoco la funzione per generare un numero casuale tra 1 e 5 per il computer

const cpuNumber = createRandomNumber(1, 5);

console.log("numero del computer: ", cpuNumber);
// sommo il numero scelto dall'utente con quello estratto per il computer

const sum = userNumber + cpuNumber;
console.log("la somma è: ", sum);

// invoco la funzione per controllare se la somma sia pari o dispari

const winningChoice = isEven (sum) ? "pari" : "dispari";

// inizio a creare il messaggio 

let message = "<p>Il vincitore è ";

// determino il vincitore

const winner = winningChoice === userChoice ? "l'utente.</p>" : "il computer.</p>";
// stampo il messaggio in pagina

element.innerHTML = message += winner;

