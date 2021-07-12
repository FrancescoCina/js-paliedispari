console.log("JS Ok");

/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

/*
1- l'utente sceglie pari o dispari (prompt con validazione);
2- l'utente sceglie un numero da 1 a 5(prompt con validazione);
3- randomizzare il numero del cpu(con funzione) da 1 a 5;
4- sommo il risultato della funzione (numero cpu) e numero utente;
5- stabilisco se la somma è pari o dispari (con funzione);
6- dichiarazione vincitore (prima console.log e dopo stampo in HTML);
*/

// RECUPERO ELEMENTI HTML

var userNumberDisplay = document.getElementById("user-number");
var cpuNumberDisplay = document.getElementById("cpu-number");

// PROMPT SCELTA PARI O DISPARI

var userChoice = prompt("Pari o dispari?", "pari").toLowerCase();
console.log(userChoice);

// PROMPT NUMERO TRA 1 E 5

var userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));

while (userNumber < 1 || userNumber > 5) {
    var userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));
}
console.log("numero Utente", userNumber);
userNumberDisplay.innerHTML = userNumber;



// FUNZIONE PER RANDOMIZZAZIONE NUMERO

var max = 5;
var min = 1;

var cpuNumber = randomizeNumber();
console.log("Numero Computer", cpuNumber);
cpuNumberDisplay.innerHTML = cpuNumber;

function randomizeNumber(numbers) {
    var randomNumber = Math.floor(Math.random() * (max) + min);
    return randomNumber;
}


// FUNZIONE PER SOMMARE I DUE NUMERI E STABILIRE SE LA SOMMA E' PARI O DISPARI

function isEven(num1, num2) {
    sum = num1 + num2;
    console.log("somma numeri", sum);
    var even = false;
    if (sum % 2 === 0) {
        even = true;
        return true;
    }
    return false;
}

var result = document.getElementById("result-game");

var sumEven = isEven(cpuNumber, userNumber);
console.log(sumEven);

if (sumEven === true && userChoice === "pari") {
    console.log("COMPLIMENTI, HAI VINTO!!");
    result.innerHTML = "COMPLIMENTI, HAI VINTO!!"
} else if (sumEven === false && userChoice === "dispari") {
    console.log("HAI VINTO, IL COMPUTER HA VINTO !");
    result.innerHTML = "COMPLIMENTI, HAI VINTO!!"

} else {
    console.log("HAI PERSO, RITENTA..");
    result.innerHTML = "HAI PERSO, RITENTA..";

}
