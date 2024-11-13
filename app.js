let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.review-slide');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

