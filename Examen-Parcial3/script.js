// Ejercicio 1: Filtro de Arreglos
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

function mostrarMayoresDeEdad() {
    const personas = [
        { nombre: 'Jesus', edad: 17 },
        { nombre: 'Luis', edad: 22 },
        { nombre: 'Alberto', edad: 18 },
        { nombre: 'Delmy', edad: 15 },
        { nombre: 'Kairos', edad: 19},
        { nombre: 'Ix', edad: 18},
        { nombre: 'Eduardo', edad: 25}
    ];
    const mayoresDeEdad = filtrarMayoresDeEdad(personas);
    const ul = document.getElementById('resultadoMayoresDeEdad');
    ul.innerHTML = '';
    mayoresDeEdad.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} - ${persona.edad} años`;
        ul.appendChild(li);
    });
}

// Ejercicio 2: Transformar y Filtrar Arreglos
function transformarYFiltrar(numeros) {
    return numeros.map(num => num ** 2).filter(num => num > 20);
}

function mostrarCuadradosMayoresDe20() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cuadrados = transformarYFiltrar(numeros);
    const ul = document.getElementById('resultadoCuadradosMayoresDe20');
    ul.innerHTML = '';
    cuadrados.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        ul.appendChild(li);
    });
}

// Ejercicio 3: Promesas y Asincronía
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const usuarios = await response.json();
        const ul = document.getElementById('resultadoUsuarios');
        ul.innerHTML = '';
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${usuario.name}, Usuario: ${usuario.username}, Email: ${usuario.email}`;
            ul.appendChild(li);
            console.log(`Nombre: ${usuario.name}, Usuario: ${usuario.username}, Email: ${usuario.email}`);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}


// Ejercicio 4: Manipulación Compleja del DOM
function agregarNuevoItem() {
    const ul = document.getElementById('listaDinamica');
    const li = document.createElement('li');
    li.textContent = 'Nuevo ítem';

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(botonEliminar);
    ul.appendChild(li);
}

// Ejercicio 5: Algoritmos y Estructuras de Datos
function ordenarPorPropiedad(arr, propiedad) {
    return arr.sort((a, b) => (a[propiedad] > b[propiedad]) ? 1 : -1);
}

function mostrarOrdenadosPorPropiedad() {
    const objetos = [
        { nombre: 'Jesus', edad: 17 },
        { nombre: 'Luis', edad: 22 },
        { nombre: 'Alberto', edad: 18 },
        { nombre: 'Delmy', edad: 15 },
        { nombre: 'Kairos', edad: 19},
        { nombre: 'Ix', edad: 18},
        { nombre: 'Eduardo', edad: 25}

    ];
    const ordenados = ordenarPorPropiedad(objetos, 'edad');
    const ul = document.getElementById('resultadoOrdenados');
    ul.innerHTML = '';
    ordenados.forEach(obj => {
        const li = document.createElement('li');
        li.textContent = `${obj.nombre} - ${obj.edad} años`;
        ul.appendChild(li);
    });
}
