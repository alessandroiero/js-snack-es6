'use strict';

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal 

// array di oggetti
const biciclette = [
      {
        nome: 'Sava 700C',
        peso: 33
    },
    {
        nome: 'Sava Phantom 0',
        peso: 17
    },
    {
        nome: 'SHOCKBLAZE S7 Race',
        peso: 21
    },
    {
        nome: 'TREK Emonda SL 5.',
        peso: 32
    },
    {
        nome: 'Helliot Bikes Sport 02.',
        peso: 27
    }
];

// creo condizione if che se non è presente alcuna bici stamperà in console "non ho bici"
if(biciclette.length === 0){
    console.log(`Non ho bici`);
} else {
let bici = biciclette[0];

//confronto anche la prima bici con se stessa
biciclette.forEach(currentBike => {
    if(currentBike.peso <= bici.peso) {
        bici = currentBike;
    }
})

//creo un ciclo filter che prenderà come riferimento il peso
const biciLeggera = biciclette.filter(({peso}) => {
    if(peso === bici.peso) {
        return true;
    }
});

//creiamo un ciclo foreach con all'interno come argomenti il nome ed il peso
biciLeggera.forEach(({nome, peso}) => {
    console.log(`La bici più leggera è la bici ${nome} che pesa ${peso} kg`)})};