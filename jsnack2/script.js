//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//1. Array con i numeri degli invitati
const guests = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ];

//2. Chiede all'utente il suo nome
let name = prompt("Qual è tuo nome?");

//3. Variabile per verificare se il nome 
let found = false;

//4. Controlla se il nome dell'utente è nell'array
for (let i=0; i < guests.length; i++) {
    if (guests[i] === name) {
        found=true
    }
}

//5. Comunica se il utente puo participare alla festa
if(found) {
    alert("Puoi participare alla festa, " + name)
} else {
    alert("Mi dispiace, " + name + ", non puoi partecipare alla festa")
}