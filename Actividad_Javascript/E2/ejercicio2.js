document.getElementById('btn2').addEventListener('click', function() {
    let nota = parseInt(document.getElementById('inp2').value);

    if (nota > 0 && nota <= 3) {
        alert('Tu nota es muy deficiente 😭');
    } else if (nota > 3 && nota <= 5) {
        alert('Tu nota es insuficiente 🤐');
    } else if (nota > 5 && nota <= 6) {
        alert('Tu nota es suficiente 🙂');
    } else if (nota > 6 && nota <= 7) {
        alert('Tu nota es buena 😊');
    } else if (nota > 7 && nota <= 8) {
        alert('Tu nota es notable 🤐');
    } else if (nota > 8 && nota <= 10) { // Corrige esta condición
        alert('Tu nota es SOBRESALIENTE, parfait! 😎');
    } else {
        alert('Uy, verifica si el número insertado es mayor que 0 🤨');
    }
});
