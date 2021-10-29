
// **Palidroma**

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola all'utente 
// let parolaUtente = prompt("inserisci una parola");
// creo variabile che di default non è palindroma
// let palidroma = "questa parola non è palidroma";
// creo una condizione che le confronta
// if (confrontaParola(parolaUtente) === parolaUtente) {
//     palidroma = "questa parola è palidroma"
// }

// console.log("palindroma");
// creo o cerco una funzione da applicare come condizione 








// **Pari e Dispari**

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente pari o dispari 
let stringaUtente = prompt("scrivi pari o dispari");
console.log("hai scelto " + stringaUtente);

// chiedo all'utente un numero da 1 a 5
let numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("hai giocato il numero " + numeroUtente);

// creo una variabile che conterrà il numero generato dal pc
let numeroPc = randomNum(1, 5);
console.log("il pc ha giocato il numero " + numeroPc);

//creo una variabile che contiene la somma dei due numeri
let somma = (numeroPc + numeroUtente);
console.log("la somma dei numeri è " + somma);

//creo una variabile che contiene il risultato
let risultato = pariEDispari(somma);

// decretiamo il vincitore con una condizione

if (stringaUtente === "pari" && somma % 2) {
    console.log("hai perso");

}else if (stringaUtente === "dispari" && somma % 2) {
    console.log("hai vinto");
}else{
    console.log("hai vinto");
}


// creo funzione per verificare che siano pari o dispari

function pariEDispari(numero){

    if (numero % 2) {
        console.log("il numero è dispari");
    }else{
        console.log("il numero è pari");
    }
    
}

// recupero funzione che ci restituisca un numero casuale da 1 a 5 giocato dal Pc

function randomNum(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
  
  }
  