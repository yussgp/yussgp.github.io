// Tarea 1: Invertir Cadena
document.getElementById('addString').addEventListener('click', function invertirCadena() {
    let cadena = document.getElementById('cadenaID').value;
    invertir(cadena);
});

function invertir(cadena) {
    var separarCadena = cadena.split("");
    const invertirCadena = separarCadena.reverse();
    var unirCadena = invertirCadena.join("");
    const mostrarCadena = document.createElement('div');
    mostrarCadena.textContent = 'Resultado: ' + unirCadena;
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarCadena);
}

// Tarea 2: Número Primo
document.getElementById('checkPrime').addEventListener('click', function checkPrime() {
    let numero = parseInt(document.getElementById('numeroID').value);
    const mostrarResultado = document.createElement('div');
    mostrarResultado.textContent = 'Resultado: ' + esPrimo(numero);
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarResultado);
});

function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
// Tarea 3: Eliminar Duplicados en un Arreglo
document.getElementById('removeDuplicates').addEventListener('click', function eliminarDuplicados() {
    let arreglo = document.getElementById('arrayID').value.split(',').map(item => parseInt(item.trim()));
    let arregloSinDuplicados = [...new Set(arreglo)];
    const mostrarResultado = document.createElement('div');
    mostrarResultado.textContent = 'Resultado: ' + arregloSinDuplicados.join(', ');
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarResultado);
});

// Tarea 4: Factorial de un Número
document.getElementById('calculateFactorial').addEventListener('click', function calcularFactorial() {
    let numero = parseInt(document.getElementById('factorialID').value);
    const mostrarFactorial = document.createElement('div');
    mostrarFactorial.textContent = 'Resultado: ' + factorial(numero);
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarFactorial);
});

function factorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    for (let i = numero - 1; i >= 1; i--) {
        numero *= i;
    }
    return numero;
}

// Tarea 5: Recuento de Vocales
document.getElementById('countVowels').addEventListener('click', function contarVocales() {
    let cadena = document.getElementById('vowelsID').value.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    for (let char of cadena) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    const mostrarVocales = document.createElement('div');
    mostrarVocales.textContent = 'Resultado: ' + count;
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarVocales);
});

// Tarea 6: Suma los Números en un Arreglo
document.getElementById('sumNumbers').addEventListener('click', function sumarNumeros() {
    let arreglo = document.getElementById('sumArrayID').value.split(',').map(item => parseInt(item.trim()));
    let suma = arreglo.reduce((acc, curr) => acc + curr, 0);
    const mostrarResultado = document.createElement('div');
    mostrarResultado.textContent = 'Resultado: ' + suma;
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarResultado);
});

// Tarea 7: Encontrar el Máximo en una Operación
document.getElementById('findMax').addEventListener('click', function encontrarMaximo() {
    let arreglo = document.getElementById('maxArrayID').value.split(',').map(item => parseInt(item.trim()));
    let maximo = Math.max(...arreglo);
    const mostrarMaximo = document.createElement('div');
    mostrarMaximo.textContent = 'Resultado: ' + maximo;
    const mostrar = document.getElementById('result-container');
    mostrar.appendChild(mostrarMaximo);
});
