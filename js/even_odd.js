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

// PROMPT SCELTA PARI O DISPARI

var userChoice = prompt("Pari o dispari?", "pari").toLowerCase();
console.log(userChoice);

// PROMPT NUMERO TRA 1 E 5

var userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));

while (userNumber < 1 || userNumber > 5) {
    var userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));
}
console.log(userNumber);


// FUNZIONE PER RANDOMIZZAZIONE NUMERO

