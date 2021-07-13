/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

var oddEven = prompt("Pari o dispari?");
var number = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(number);
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var numberPc = getRandomNumber(1, 5);
console.log(numberPc);
var result = number + numberPc;
console.log(result);
if (result % 2 === 0 && oddEven == "pari") {
    console.log("Hai vinto");
} else if (result % 2 === 0 && oddEven == "dispari") {
    console.log("Hai perso");
} else if (result % 2 === 1 && oddEven == "dispari") {
    console.log("Hai vinto");
} else if (result % 2 === 1 && oddEven == "pari") {
    console.log("Hai perso");
};