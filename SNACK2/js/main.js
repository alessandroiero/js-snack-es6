'use strict';

// SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// Array di oggetti
const studenti = [

    {
        id: 213,
        nome: "Marco della Rovere",
        grade: 78
    },

    {
        id: 110,
        nome: "Paola Cortellessa",
        grade: 96
    },

    {
        id: 250,
        nome: "Andrea Mantegna",
        grade: 48
    },

    {
        id: 145,
        nome: "Gaia Borromini",
        grade: 74
    },

    {
        id: 196,
        nome: "Luigi Grimaldello",
        grade: 68
    },

    {
        id: 102,
        nome: "MPiero della Francesca",
        grade: 50
    },

    {
        id: 120,
        nome: "Francesca da Polenta",
        grade: 84
    }
]

//Stampiamo i nomi studenti tutti in maiuscolo
const studentUpCase = studenti.map((element) => element.nome.toUpperCase());
console.log(studentUpCase);

//Stampiamo i voti studenti superiori a 70
const studentVoteUp = studenti.filter((element) => {
    return element.grade > 70;
})
console.log(studentVoteUp)

//Stampiamo i voti studenti superiori a 70 con id > 120
const studentNewId = studentVoteUp.filter((element) => {
    return element.id > 120;
})
console.log(studentNewId)
