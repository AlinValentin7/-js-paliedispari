console.log('function')
//mi serve una funzione per la quale devo sapere se la parola dell utente sia palindroma oppure no


//dichiariamo una variabile per la quale dovremmo dividre la parola per caratteri
let parolaDivisa
//dichiariamo una variabile per la quale la parola dovrebbe essere al contratio
let alorap 
//creiamo la nostra funzione 
function palindormo (parola){
//invochiamo una funzione per la quale divido la parola per carattere da mettre in un array
parolaDivisa = parola.split('')
//invochiamo la funzione reverse per far si che i cratteri dell array si inverton
//con la funzione join 'ricompattiamo' i caratteri divisi in precedenza 
alorap = parolaDivisa.reverse().join('')//concatena i carettri
//controlliamo che la parola sia uguale alla parola inserita ma al contario
if (parola === alorap){
    console.log ( parola + ' è palindroma') //stampo plaindromo se è uguale
}
else{
    console.log( parola + ' non è palindroma')//stampo non e palindromo se non è uguale
}
}
//invoco la funzione creata
parola = palindormo(prompt('nome'))









