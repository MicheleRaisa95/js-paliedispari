'use strict'

// chiedi all'utente una parola palindroma

const parolaUser = prompt('inserisci una parola palindroma')
//console.log(parolaUser)

function palindroma (string) {
    //calcola la lunghezza delle parola 
    let parola = string.length -1

    for (let i = 0; i < string.length; i++) {
        // confronto con string[parola]
        if (string[i] != string[parola]) {
            return false;
        }
        parola--
    }
    return true
}

// funzione per controllare se la parola contiene numeri

function contieneNumeri (string) {
    for (let i = 0; i < string.length; i++){

         // verifica se il carattere e un numero
        if (!isNaN(parseInt(string[i]))) {
            return true;
        }
    }
    return false;
}


// stampo in console se la parola e palindroma 

const veroPalindromo = palindroma(parolaUser.toLocaleLowerCase())

if (veroPalindromo) {
    console.log('È un palindromo')
} else {
    console.log('Non è palindromo')
}

// stampo in console errore se la parola contiene numeri

const haNumeri = contieneNumeri(parolaUser)

if (haNumeri) {
    console.log ('Attenzione la parola inserita non deve contenere nuemri')
}

