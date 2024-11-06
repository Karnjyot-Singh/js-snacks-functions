/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * Funzione che restituisce le iniziali
 * @param {string} namesArray 
 * @returns {string}
 */


function getInitials(namesArray) {
    const initials = [];  
    for (let i = 0; i < namesArray.length; i++) {
      initials.push(namesArray[i][0]); 
    }
    return initials; 
}


// Invoca la funzione qui e stampa il risultato in console

const initials = getInitials(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]