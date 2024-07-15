document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página al hacer submit

    let busqueda = document.getElementById('search').value;

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.results);
            mostrarResultados(res.results);
        })
        .catch(err => console.error(err));
});



function mostrarResultados(results) {
    const contenedores = document.querySelectorAll('.recuadros');

    contenedores.forEach((contenedor, index) => {
        if (index < results.length) {
            const producto = results[index];

            const titulo = document.createElement('p');
            titulo.innerText = `Nombre: ${producto.title}`;

            const precio = document.createElement('p');
            precio.innerText = `Precio: $${producto.price}`;

            const imagen = document.createElement('img');
            imagen.src = producto.thumbnail;
            imagen.alt = producto.title;

            contenedor.innerHTML = ''; // Limpiar contenido previo
            contenedor.appendChild(imagen);
            contenedor.appendChild(titulo);
            contenedor.appendChild(precio);
        } else {
            contenedor.innerHTML = ''; // Limpiar si no hay más resultados
        }
    });
}
