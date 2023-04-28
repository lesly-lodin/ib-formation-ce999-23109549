/**
 * Clic sur le bouton - DOM-0
 */
let button = document.querySelector('#sayHello');
button.onclick = function () {
    alert('Salut toi !');
}; // autre façon d'écrire une fonction en JS


/**
 * Déplacement de la souris - DOM-2
 */
document.body.addEventListener(
    'mousemove',
    function (evt) {
        // console.info(evt.clientX + ', ' + evt.clientY);
        document.querySelector('#zone').textContent = evt.pageX + ', ' + evt.pageY;
    }
);

/**
 * Survol d'une zone - DOM-2
 */
document.querySelector('#zone').addEventListener(
    'mouseenter',
    function () {
        // document.querySelector('#zone').style.backgroundColor = '#f00';
        this.style.backgroundColor = '#f00';
    }
);

document.querySelector('#zone').addEventListener(
    'mouseleave',
    function () {
        this.style.backgroundColor = '';
    }
);