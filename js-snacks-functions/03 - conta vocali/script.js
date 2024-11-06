/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function contaVocali(str) {
    let conta = 0;
    let vocaliTrovate = [];  
    str = str.toLowerCase();  

    for (let i = 0; i < str.length; i++) {
      if ('aeiou'.includes(str[i])) { 
        conta++;  
        vocaliTrovate.push(str[i]);  
      }
    }

    
    return { conta, vocaliTrovate };
  }


// Invoca la funzione qui e stampa il risultato in console

const risultato = contaVocali(word);

console.log(`Numero di vocali: ${risultato.conta} (vocali: ${risultato.vocaliTrovate.join(', ')})`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)