"use strict";

// SNACK 1
// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`

// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

// Creiamo un Array di Oggetti che conterrà gli invitati
const invitati = [
    {
        nome : "Brad Pitt",
        tavolo : "Vip",
        posto : "1",
    },
    {
        nome : "Johnny Depp",
        tavolo : "Vip",
        posto : "2"
    },
    {
        nome : "Lady Gaga",
        tavolo : "Vip",
        posto : "3",
    },
    {
        nome : "Cristiano Ronaldo",
        tavolo : "Vip",
        posto : "4",
    },
    {
        nome : "Georgina Rodriguez",
        tavolo : "Vip",
        posto : "5",
    },
    {
        nome : "Chiara Ferragni",
        tavolo : "Vip",
        posto : "6",
    },
    {
        nome : "Fedez",
        tavolo : "Vip",
        posto : "7",
    },
    {
        nome : "Gerorge Cloonney",
        tavolo : "Vip",
        posto : "8",
    },
    {
        nome : "Amal Clooney",
        tavolo : "Vip",
        posto : "9",
    },
    {
        nome : "Maneskin",
        tavolo : "Vip",
        posto : "10"
    }
]

// Creo Ciclo ForEach
invitati.forEach(element => {
    console.log(`Nome Ospite: ${element.nome}.`,`Numero Posto: ${element.posto}.`,`Tavolo: ${element.tavolo}.`)
});

