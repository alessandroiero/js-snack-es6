"use strict";

// SNACK 1
// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`

// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

// Creiamo un Array di Oggetti che conterrà gli invitati
const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Creo Ciclo Map con all'interno modifica Array
const listaInvitati= invitati.map((element, i)=> {
    const datiInvitato = {
        nomeTavolo: 'Tavolo Vip',
        ospite: element,
        segnaposto: i + 1
    };

    return datiInvitato;
});

console.log(listaInvitati);
