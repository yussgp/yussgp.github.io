document.getElementById('btn').addEventListener('click', function() {
    let cadenas = [];
    let input;

    while (true) {
        input = prompt('Inserta el texto (o presiona Cancelar para terminar):');
        if (input === null) {
            break;
        }
        cadenas.push(input);
    }

    if (cadenas.length > 0) {
        document.getElementById('showPlace').innerText = cadenas.join(' - ');
    } else {
        document.getElementById('showPlace').innerText = 'No se ingresaron cadenas.';
    }
});

document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});
