/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1-prompt per richiedere all'utente la parola;
2- funzione per controllare se la parola è palindroma: 
2a- trasformo string in array(split);
2b- applico metodo reverse all'array;
2c- se array "reversato" === a userWord, allora valore true;
2d- se array "reversato" !== a userWord, allora valore false;
3- se valore true, la parola è palindroma;
4- se valore false, la parola NON è palindroma;
*/

var userWord = prompt("Scrivi una parola palindroma");
console.log(userWord);

function isPalindrome(string) {
    var wordArray = userWord.split("");
    console.table(wordArray);
    var wordArrayReverse = wordArray.reverse();
    console.table(wordArrayReverse);
    var wordUser = wordArray.join("");
    console.log(wordUser);
    var wordRevers = wordArrayReverse.join("");
    console.log(wordRevers);
}


console.log(isPalindrome(userWord))


/*
if (wordArray[0] === wordReverse[0] && wordArray[wordArray.length - 1] === wordReverse[wordReverse.length - 1]) {
    return true;
} else {
    return false;
} */

