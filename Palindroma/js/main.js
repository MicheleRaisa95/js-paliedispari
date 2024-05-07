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


// stampo in console se la parola e palindroma 

const veroPalindromo = palindroma(parolaUser.toLocaleLowerCase())

if (veroPalindromo) {
    console.log('È un palindromo')
} else {
    console.log('Non è palindromo')
}

