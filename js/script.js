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
// console.log(arrayZucchine);

// definisco variabile somma
    var somma = 0;

// seleziono ogni elemento dell'array con un ciclo for

    for (var i = 0; i < arrayZucchine.length; i++) {
        var thisZucchina = arrayZucchine[i];
        // console.log(thisZucchina);

        // ricavo il peso di ogni zucchina e lo salvo in una variabile 
        var thisZucchinaPeso = thisZucchina.peso;
        console.log('peso di ogni zucchina: ', thisZucchinaPeso);

        // ricavo la somma
        somma = somma + thisZucchinaPeso;
    }
    console.log('somma: ', somma);

// ----------------------------------------------------------------------------------------------    


// 2 - Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.