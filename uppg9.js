

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

const number = [3, 15, 20, 5, 79, 78, 51, 32, 5001];


    sort(number);

    function sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(`${arr[i]} jämt`);
            } else {
                console.log(`${arr[i]} udda`);
            }
        }
    }
}



module.exports = { uppg9 };