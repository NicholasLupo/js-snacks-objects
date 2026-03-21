//Snack 1 - Il peso delle bici
//Array di oggetti
const bikes = [

    {
        name: 'Bici da corsa',
        peso: '8kg'
    },
    {
        name: 'Mountain bike',
        peso: '12kg'
    },
    {
        name: 'Bicicletta elettrica',
        peso: '23kg'
    },
    {
        name: 'Bici da città',
        peso: '15kg'
    },
    {
        name: 'Bici da bambini',
        peso: '4kg'
    },
]

//Funzione per rilevare il peso minore
const getLightBike = (list) => {

    //Array per contenere i pesi
    let bikeLight = [];

    //Trasformo i pesi in valori numerici
    for (let i = 0; i < list.length; i++) {

        let light = list[i].peso;
        let lightNum = parseInt(light, 10);
        bikeLight.push(lightNum); 

    }

    //Trovo il valore più piccolo nell'array
    let officialLight = Math.min(...bikeLight);
    //Trovo la posizione del valore per poter stampare l'oggetto col peso minore
    let objectPosition = bikeLight.indexOf(officialLight)
    console.log(list[objectPosition]);

}

getLightBike(bikes)