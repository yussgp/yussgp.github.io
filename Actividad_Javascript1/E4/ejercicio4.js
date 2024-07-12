document.getElementById('btn').addEventListener('click', function() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let dni;
    let resultado = '';

    while (true) {
        dni = prompt('Introduce tu número de DNI (0-99999999):');
        
        if (dni === null) { // El usuario presionó cancelar
            break;
        }

        dni = parseInt(dni);

        if (isNaN(dni) || dni < 0 || dni > 99999999) {
            alert('Por favor, introduce un número válido entre 0 y 99999999.');
        } else {
            let letra = letras[dni % 23];
            resultado += `DNI: ${dni}-${letra}\n`;
            document.getElementById('show').innerText = resultado;
        }
    }
});

document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});
