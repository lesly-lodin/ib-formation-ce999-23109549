/**
 * Calcul du total dans le tableau - DOM-2
 */
document.querySelector('#calc').addEventListener(
    'click',
    function () {
        let cells = document.querySelectorAll('tbody tr td:last-of-type'), total = 0;
        for (cell of cells) {
            total += parseFloat(cell.textContent);
        }
        document.querySelector('#total').textContent = total;
    }
);