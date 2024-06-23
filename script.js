window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);
});

// script.js

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    const slideWidth = slides[slideIndex].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// Automatic slide change every 5 seconds
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000);

// Manual navigation button events
document.querySelectorAll('.arrow').forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('prev')) {
            showSlide(slideIndex - 1);
        } else if (arrow.classList.contains('next')) {
            showSlide(slideIndex + 1);
        }
    });
});
