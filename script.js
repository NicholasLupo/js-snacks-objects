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

    for (let i = 0; i < list.length; i++) {

        const bike = list[i];
        console.log(bike);

    }

}

getLightBike(bikes)