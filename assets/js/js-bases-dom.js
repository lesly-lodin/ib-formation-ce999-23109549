// *************************
// DOM - Document Object Model
// *************************

// Injection
document.write('<p>Hello World!</p>');

// Méthodes du DOM
let ol = document.createElement('ol'), li, text;
for (let contact of contacts) {
    li = document.createElement('li');
    li.setAttribute('style', 'list-style:georgian;'); // li.style.listStyle = 'roman';
    text = document.createTextNode(contact);
    li.appendChild(text);
    ol.appendChild(li);
}
document.body.appendChild(ol);