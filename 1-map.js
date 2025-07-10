'use strict'

const array = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
]

const uniqueIds = [...(new Set(array.map((person) => person.id)))]
const uniquePersons = uniqueIds.map((id) => array.find((person) => person.id === id))

console.log(uniquePersons)