/**
 * Remplit la liste des pays au chargement de la page
 */
window.addEventListener(
    'DOMContentLoaded',
    function () {
        // step 1 - instancie l'objet AJAX
        let xhr = new XMLHttpRequest();

        // step 2 - se connecte au serveur
        xhr.open('get', 'https://restcountries.com/v3.1/lang/fra?fields=cca2,translations', true);

        // step 3 - envoie la requête HTTP
        xhr.send();

        // step 4 - écoute le retour du serveur
        xhr.addEventListener(
            'readystatechange',
            function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // teste le retour du serveur
                    console.log(xhr.responseText);

                    // convertit le texte en objet : sérialiser
                    let countries = JSON.parse(xhr.responseText), option;

                    // crée une option de liste pour chaque pays du tableau retourné : DOM
                    for (country of countries) {
                        option = document.createElement('option');
                        option.value = country.cca2;
                        option.textContent = country.translations.fra.official;
                        document.querySelector('#country').appendChild(option);
                    }
                }
            }
        );
    }
);

/**
 * Fonction renvoyant l'âge à partir de 2 dates
 */
function age(date1, date2 = new Date()) {
    let d1 = new Date(date1), d2 = new Date(date2);
    if (isNaN(d1) || isNaN(d2)) {
        throw "L'une des deux dates n'est pas correcte.";
    } else {
        return parseInt(Math.abs(d1 - d2) / 1000 / 60 / 60 / 24 / 365.25);
    }
}

/**
 * Calcule l'âge au changement de la date de naissance
 */
document.querySelector('#dob').addEventListener(
    'change',
    function () {
        document.querySelector('#age').textContent = age(this.value) + ' ans';
    }
);

/**
 * Gestion du dark mode
 */
document.querySelector('#dark').addEventListener(
    'click',
    function () {
        document.body.className = 'container dark';
    }
);

document.querySelector('#light').addEventListener(
    'click',
    function () {
        document.body.className = 'container light';
    }
);