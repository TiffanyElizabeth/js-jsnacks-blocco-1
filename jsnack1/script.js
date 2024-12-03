// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

//1. chiede all'utente un numero
const num1 = Number(prompt("Scrivi un numero"));

//2. chiede all'utente un altro numero
const num2 = Number(prompt("Scrivi un altro numero"));

//3. stampa il maggiore numero 
if (num1 > num2) {
    alert("Il maggiore numero è: " + num1)
} else if (num2 > num1) {
    alert("Il maggiore numero è: " + num2)
} else {
    alert("I numeri inseriti sono uguali.")
}