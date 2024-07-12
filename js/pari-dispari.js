console.log('pari e dispari')

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */
// let numeroPC = Math.floor(Math.random() * 6)

let sceltaUtente = prompt('scegli pari o dispari')
let sceltaUtente2 = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log(sceltaUtente2,sceltaUtente)



let numeroPC = Math.floor(Math.random() * 6)
console.log(numeroPC)
let sum = sceltaUtente2 + numeroPC
console.log(sum)
let n = pari(n)
if(sum = n){
    console.log('Pari! Hai Vinto!')
}
else{
    console.log('Dispari! Hai perso!')
}

function pari(n) {
	const resto = n % 2
	if (resto === 0) {
		console.log(n)
    }
    return
}

function dispari(n) {
	const resto = n % 2
	if (resto === 1) {
		console.log(n)

	}
    return
}



