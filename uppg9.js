

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

const number = [3, 15, 20, 5, 79, 78, 51, 32, 5001];


    sort(number)

function sort() {
    for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        output = number[i] + " jämnt";
        console.log(output);
    } else {
        output = number[i] + " udda";
        console.log(output);
    }
}
}
}


module.exports = { uppg9 };