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
// Opérateurs arithmétiques
// *************************





