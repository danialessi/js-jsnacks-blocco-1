//1 - Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola la somma del peso di tutte le zucchine.

// definisco array zucchine (peso in grammi)
    var arrayZucchine = [
        {
            'varietà': 'nero',
            'peso': 50,
            'lunghezza': 8
        },
        {
            'varietà': 'romanesco',
            'peso': 30,
            'lunghezza': 9
        },
        {
            'varietà': 'faenza',
            'peso': 60,
            'lunghezza': 10
        },
        {
            'varietà': 'fiorentina',
            'peso': 80,
            'lunghezza': 12
        },
        {
            'varietà': 'siciliana',
            'peso': 100,
            'lunghezza': 13
        },
        {
            'varietà': 'napoletana',
            'peso': 40,
            'lunghezza': 8
        },
        {
            'varietà': 'triestina',
            'peso': 20,
            'lunghezza': 15
        },
        {
            'varietà': 'pugliese',
            'peso': 86,
            'lunghezza': 14
        },
        {
            'varietà': 'tonda',
            'peso': 116,
            'lunghezza': 5
        },
        {
            'varietà': 'gialla',
            'peso': 27,
            'lunghezza': 7
        },
    ]
    console.log(arrayZucchine);

// stampo la somma del peso delle zucchine utilizzando la funzione più in basso
    var sommaPeso = objectsWeightSum(arrayZucchine);
    console.log(sommaPeso);

// ----------------------------------------------------------------------------------------------    


// 2 - Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//definisco array zucchine (peso in grammi)
    // var arrayZucchine = [
    //     {
    //         'varietà': 'nero',
    //         'peso': 50,
    //         'lunghezza': 8
    //     },
    //     {
    //         'varietà': 'romanesco',
    //         'peso': 30,
    //         'lunghezza': 9
    //     },
    //     {
    //         'varietà': 'faenza',
    //         'peso': 60,
    //         'lunghezza': 18
    //     },
    //     {
    //         'varietà': 'fiorentina',
    //         'peso': 80,
    //         'lunghezza': 12
    //     },
    //     {
    //         'varietà': 'siciliana',
    //         'peso': 100,
    //         'lunghezza': 13
    //     },
    //     {
    //         'varietà': 'napoletana',
    //         'peso': 40,
    //         'lunghezza': 8
    //     },
    //     {
    //         'varietà': 'triestina',
    //         'peso': 20,
    //         'lunghezza': 16
    //     },
    //     {
    //         'varietà': 'pugliese',
    //         'peso': 86,
    //         'lunghezza': 17
    //     },
    //     {
    //         'varietà': 'tonda',
    //         'peso': 116,
    //         'lunghezza': 20
    //     },
    //     {
    //         'varietà': 'gialla',
    //         'peso': 27,
    //         'lunghezza': 23
    //     },
    // ]

// definisco array di zucchine che misurano meno di 15 
    // var arrayZucchinePiccole = [];

// definisco array zucchine che misurano più di 15 
    // var arrayZucchineGrandi = [];

// seleziono ogni zucchina dell'array con ciclo for 
    // for (var i = 0; i < arrayZucchine.length; i++) {
    //     var thisZucchina = arrayZucchine[i];

    //     // se le zucchine misurano meno di 15 pushale nell'array zucchine piccole, altrimenti in quelle grandi
    //         if (thisZucchina.lunghezza < 15) {
    //             arrayZucchinePiccole.push(thisZucchina);
    //         } else {
    //             arrayZucchineGrandi.push(thisZucchina);
    //         }
    // }

// stampo i 2 array divisi per lunghezza
    // console.log('zucchine < 15: ', arrayZucchinePiccole);
    // console.log('zucchine > 15: ', arrayZucchineGrandi);

// stampo il peso complessivo dei 2 array 
    // var pesoZucchinePiccole = objectsWeightSum(arrayZucchinePiccole);
    // console.log(pesoZucchinePiccole);

    // var pesoZucchineGrandi = objectsWeightSum(arrayZucchineGrandi);
    // console.log(pesoZucchineGrandi);


// funzione per la somma dei pesi degli oggetti
    function objectsWeightSum (array) {
        var sum = 0;

        for (var j = 0; j < array.length; j++) {
            var thisElement = array[j];
            
            // faccio la somma del peso di ogni zucchina
                sum = sum + thisElement.peso;
        }

        return sum;
    }