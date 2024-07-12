document.getElementById('boton1').addEventListener( 'click', function(){

    let numero = document.getElementById('input-1').value

    if (numero > 99){
        alert(' no se aceptan numeros mayor a 99')
    }
    else if (numero <= 0){
        alert( 'no se aceptan numeros negativos o 0')
    }
    else if (numero >= 18 ){
        alert('eres mayor de edad ya puedes conducir :)')
    }
    else {
        alert( 'no puedes conducir eres menor aún')
    }

})