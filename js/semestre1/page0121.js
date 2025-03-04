export function initializeCarrossel(carrosselId) {
    const carrossel = document.getElementById(carrosselId);
    if (!carrossel) return;

    const slidesContainer = carrossel.querySelector('.carrossel__elementos');
    const slides = carrossel.querySelectorAll('.carrossel__slide');
    const prevButton = carrossel.querySelector('.carrossel__botoes .prev');
    const nextButton = carrossel.querySelector('.carrossel__botoes .next');

    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    showSlide(currentSlide);
}