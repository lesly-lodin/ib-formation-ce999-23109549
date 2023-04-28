/**
 * Gestion du slideshow
 */

// Variables globales
// lire contenu folder via AJAX
let slides = [
    'assets/pics/slides/slide1.jpg',
    'assets/pics/slides/slide2.jpg',
    'assets/pics/slides/slide3.jpg',
    'https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg'
];
// let slide = document.getElementById('slide');
let slide = document.querySelector('#slide');
let pos = 0;
let process;

function slideShow() {
    // Définit la position dans le tableau d'images
    if (pos < slides.length - 1) {
        pos++;
    } else {
        pos = 0;
    }
    // Change la source de l'image
    clearTimeout(process);
    slide.src = slides[pos];
    process = setTimeout(slideShow, 3000);
}

slideShow();

/**
 * Fonction qui ajoute la liste des livres dans INDEX
 */

function showBooks() {
    let tagBooks = document.getElementById('books'), text;
    for (book of books.items) {
        text = '<article class="book"><img src="' + (!book.volumeInfo.imageLinks ? 'assets/pics/bg/cover.jpg' : book.volumeInfo.imageLinks.thumbnail) + '" alt=""><h3>' + book.volumeInfo.title + '</h3><p>' + (!book.searchInfo ? '...' : book.searchInfo.textSnippet) + '</p><a href="' + book.accessInfo.webReaderLink + '">En savoir plus</a></article>';
        tagBooks.insertAdjacentHTML('beforeend', text);
    }
}