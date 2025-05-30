

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

let numbers = [3, 15, 20, 5, 79, 78, 51, 32, 5001];


    sort(numbers)

function sort() {
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " jämnt")
    } else {
        console.log(numbers[i] + " udda");
    }
}
}

}

module.exports = { uppg9 };