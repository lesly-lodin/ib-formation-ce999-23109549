/**
 * Fonction qui ajoute la liste des livres dans INDEX
 */

function showBooks() {
    let tagBooks = document.getElementById('books'), text;
    for (book of books.items) {
        text = '<article class="book"><img src="' + book.volumeInfo.imageLinks.thumbnail + '" alt=""><h3>' + book.volumeInfo.title + '</h3><p>' + book.searchInfo.textSnippet + '</p><a href="' + book.accessInfo.webReaderLink + '">En savoir plus</a></article>';
        tagBooks.insertAdjacentHTML('beforeend', text);
    }
}