'use strict';

// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreSerieA = [
    {
        nome : 'milan',
        punti : 0 ,
        falliSubiti: 0,
    },
    {
        nome : 'inter',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'juventus',
        punti : 0,
        fallisubiti: 0,
    },
    {
        nome : 'atalanta',
        punti : 0,
        fallisubiti: 0,
    },
    {
        nome : 'napoli',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'lazio',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'roma',
        punti : 0,
        falliSubiti: 0,
    },
    {
        nome : 'monza',
        punti : 0,
        falliSubiti: 0,
    },
    
];

console.log(squadreSerieA);
// Creiamo ciclo for each per selezionare tutti gli elementi array
squadreSerieA.forEach(element => {
    element.punti = Math.floor(Math.random() * 100);
    element.falliSubiti = Math.floor(Math.random() * 100);
});
// Creiamo ciclo for each per selezionare tutti gli elementi array
const nomiFalli = squadreSerieA.map(({nome,falliSubiti}) =>{
    return {nome , falliSubiti};
});

console.log(nomiFalli)