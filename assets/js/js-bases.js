// Commentaire sur 1 ligne

/*
Commentaire
sur
pusieurs
lignes
*/

/**
 * JavaDoc
 */

// *************************
// Variables primitives
// *************************

nb = 4; // variable implicite et globale : fortement déconseillé !
nb = 'Quatre'; // faiblement typé
var boys = 3; // variable explicite et globale
let girl = 1; // variable explicite et locale
const lieu = 'La Défense'; // constante

// *************************
// Opérateurs arithmétiques
// *************************

let i = 1, j = '2', k = 'trois';
let result = i + j + k;
console.log(result);

j = 2;
k = 3;
let calc = i * j / k - 10 + 5; // priorités des opérations
console.log(calc);

let l = 4;
let mod = l % j;
console.log(mod);
console.log(l % k);

// Post/Pre incrémentation
i = 0;
i = i + 1; // i++
console.log(i++); // post incrémentation
console.log(++i); // pré incrémentation
console.log(i);

// Test type variables
let m;
console.log(typeof m);
console.log(typeof 'Hello');
console.log(typeof i);
console.log(typeof (j / k));
console.log(typeof (i == k));
console.log(typeof z);
console.log(typeof i == 'number'); // teste type d'une variable

// Transtypage ou Cast
let n = '3 petits cochons', o = '250 nuances de Grey', p = 'R2D2', q = '55.987', r = new Number(5), s = 5;
calc = parseInt(n) + parseInt(o);
console.log(calc);
console.log(parseInt(p)); // NaN = Not a Number
console.log(parseInt(q)); // valeur entière
console.log(parseFloat(q)); // réelle
console.log(typeof r);
console.log(typeof s);

// *************************
// Variables composites ou tableaux
// *************************

let matrix = []; // tableau vide
let matrix2 = new Array();
console.log(typeof matrix);
console.log(typeof matrix2);
let course = ['CE999', 5, true];
course[3] = 'Développement HTML/CSS/JS';
course[1] = 20;
course.push('2023-04-24T09:30:00'); // ajout en fin de tableau
course.unshift('Visio'); // ajout en début
console.log(course.length);
console.log(course);

// *************************
// Objets globaux : String, Number + Math, Boolean, Array, Function, RegExp,..., Object
// *************************

// String
let p1 = 'Hugo', p2 = new String('Hugo');
console.log(p1 == p2); // compare les valeurs
console.log(p1 === p2); // compare les valeurs ET le type
console.log(p2.toUpperCase());
console.log('Hello World!'.toLowerCase());

// Math - Non instanciable
console.log(Math.PI);
console.log(Math.round(1234.56));
console.log(Math.ceil(1.0000009)); // entier sup = 2
console.log(Math.floor(1.999999998)); // entier inf = 1
console.log(1234.5678.toFixed(2));
console.log(Math.random());
console.log(Math.min(1, 20, 654, -12));












