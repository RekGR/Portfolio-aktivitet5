// Filtrering av galleriet på startsidan
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const emptyMessage = document.getElementById('empty-message');

filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const category = button.getAttribute('data-filter');

        // Byt vilken knapp som ser aktiv ut
        filterButtons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');

        let synligaKort = 0;

        galleryItems.forEach(function (item) {
            const matchar = category === 'alla' || item.getAttribute('data-category') === category;
            item.style.display = matchar ? '' : 'none';
            if (matchar) {
                synligaKort++;
            }
        });

        // Visa ett meddelande om en kategori skulle sakna kort
        if (emptyMessage) {
            emptyMessage.classList.toggle('d-none', synligaKort > 0);
        }
    });
});
