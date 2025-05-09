

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const personer = [
    {name:"anders", age: 45},
    {name:"andreas", age: 27},
    {name:"linus", age: 12},
    {name:"kalle", age: 78},
    {name:"gandalf", age: 7}

    ];

function PrintOver30(array) {
    array.forEach(personer => {
        if (personer.age >30) {
            console.log(personer.name);
    }
        
    });
}

PrintOver30(personer);


}

module.exports = { uppg8 };
uppg8();