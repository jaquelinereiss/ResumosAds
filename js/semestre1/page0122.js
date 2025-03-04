function initCarousel(carouselId, prevButtonId, nextButtonId) {
    const carousel = document.getElementById(carouselId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);
    let index = 0;

    nextButton.addEventListener("click", () => {
        if (index < carousel.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = carousel.children.length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

initCarousel("carrossel-protocolos-1", "carrossel-protocolos-1-btnPrev", "carrossel-protocolos-1-btnNext");
initCarousel("carrossel-protocolos-2", "carrossel-protocolos-2-btnPrev", "carrossel-protocolos-2-btnNext");
initCarousel("carrossel-protocolos-3", "carrossel-protocolos-3-btnPrev", "carrossel-protocolos-3-btnNext");