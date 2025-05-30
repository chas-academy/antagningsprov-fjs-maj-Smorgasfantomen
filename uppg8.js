

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


let persons = [
    {name: "Jotis", age: 34 },
    {name: "Linnea", age: 29 },
    {name: "Anna", age: 32 },
    {name: "Tim", age: 28 },
    {name: "William", age: 35 },
]

let oldpeople = persons.filter((person) => person.age > 30)
                        .map((person) => person.name);

for (let i = 0; i < oldpeople.length; i++) {
    console.log(oldpeople[i])
}

}




module.exports = { uppg8 };