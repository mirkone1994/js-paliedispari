/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

function palindromo(string) {
    var length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return "Non è palindroma!";
        }
    }
    return "È palindroma!";
}
var string = prompt("Inserisci una parola palindroma:");
var palindromoResult = palindromo(string);
console.log(palindromoResult);