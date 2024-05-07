'use strict'

// funzione per generare casualmente un numero

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 //funzione per determinare se un numero pari o dispari

 function pari (number) {
    return number % 2 === 0;
}

// creo un prompt per far scegliere pari e disparie e un numero da 1 a 5

const sceltaUtente = prompt ('scegli pari o dispari');
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

// console.log(sceltaUtente);
 console.log(numeroUtente);


// genero numero casuale per il computer 

const numeroComputer = getRndInteger(1,5);

 console.log(numeroComputer);

 

// Verifica se l'utente ha inserito una scelta valida
if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    console.log('Errore: La scelta deve essere "pari" o "dispari".');
} 
    // Somma dei due numeri
    const somma = numeroUtente + numeroComputer;

console.log(somma);


// verifico se iil nuemro e pari

const sommaPari = pari(somma)

console.log(sommaPari)

//dichiaro il vincitore 

if ((sceltaUtente === 'pari' && sommaPari) || (sceltaUtente === 'dispari' && !sommaPari)) {
    console.log(`Hai scelto ${sceltaUtente}, la somma ${somma} è  `);
    if (sommaPari) {
        console.log('pari. Hai vinto!')
    } else {
        console.log('dispari. Hai vinto!')
    }
} else {
    console.log(`Hai scelto ${sceltaUtente}, la somma (${somma}) è `);
    if (sommaPari) {
        console.log('pari. Hai perso!');
    } else {
        console.log('dispari. Hai perso!');
    }
}

