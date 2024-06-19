function generate() {
    var firstname = ["(Apa)Eduardo", "Heyder", "Jesus", "Josue", "Yuss", "Erik", "Angel", "Santiago", "Lucio"];
    var lastname = ["Lizarraga", "Euan", "Ix", "Paredes", "Nuñez", "Pool", "Adrian", "Gonzalez", "Ramirez", "Pérez"];
    var rand_first = Math.floor(Math.random() * firstname.length);
    var rand_last = Math.floor(Math.random() * lastname.length);
    document.getElementById('result').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>" + firstname[rand_first] + " " + lastname[rand_last] + "</h2></div>";

}