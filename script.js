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
    }
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

//Snack 2 - Boolean League
//Array di oggetti
const squadre = [

    {
        name: 'Bologna',
        goal: '0',
        falli: '0'
    },
    {
        name: 'Juve',
        goal: '0',
        falli: '0'
    },
    {
        name: 'Inter',
        goal: '0',
        falli: '0'
    },
    {
        name: 'Napoli',
        goal: '0',
        falli: '0'
    },
    {
        name: 'Atalanta',
        goal: '0',
        falli: '0'
    }
]

//Funzione per stabilire i punteggi
function getResult(teams) {

    //Array per nomi e falli subiti
    let fouls = [];

    //Assegno i punteggi e i falli
    for (let i = 0; i < teams.length; i++) {

        //Nomi squadre
        let squad = teams[i].name

        //Goal fatti
        let goal = teams[i].goal;
        let randomGoal = Math.floor(Math.random() * 11);
        goal = randomGoal;

        //Falli subiti
        let foul = teams[i].falli;
        let randomFoul = Math.floor(Math.random() * 11);
        foul = randomFoul;

        //Annuncio punteggi
        let annuncio = 'La squadra ' + teams[i].name + ' ha segnato ' + goal + ' goal totali e subito ' + foul + ' falli';
        console.log(annuncio);

        //Inserimento nomi e falli in un nuovo array
        fouls.push(
            {
                squad,
                foul,
            },
        )

    }

    console.log(fouls);

}

getResult(squadre)