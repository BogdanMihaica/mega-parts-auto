document.addEventListener('DOMContentLoaded', () => {
    let navLeft = document.querySelector('.expanded-navigator-left');
    let navRight = document.querySelector('.expanded-navigator-right');
    let modalImg = document.querySelector('.modal-image-container img');
    let modal = document.getElementById('image-modal');
    let modalClose = document.getElementById('modal-close');

    let images = Array.from(document.querySelectorAll('.bulk img'));
    let currentIndex = -1;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            currentIndex = index;
        });
    });

    navLeft.addEventListener('click', () => {
        if (currentIndex === -1) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    });

    navRight.addEventListener('click', () => {
        if (currentIndex === -1) return;
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });

    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                navRight.click();
            } else if (e.key === 'ArrowLeft') {
                navLeft.click();
            } else if (e.key === 'Escape') {
                modalClose.click();
            }
        }
    });
});
