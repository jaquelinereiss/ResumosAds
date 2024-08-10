const carrossel1 = document.getElementById("carrossel_1");
const carrossel2 = document.getElementById("carrossel_2");
const carrossel3 = document.getElementById("carrossel_3");

const prevButton1 = document.getElementById("prev1");
const nextButton1 = document.getElementById("next1");
const prevButton2 = document.getElementById("prev2");
const nextButton2 = document.getElementById("next2");
const prevButton3 = document.getElementById("prev3");
const nextButton3 = document.getElementById("next3");

let currentSlide1 = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;

function showSlide(carrossel, currentSlide) {
    const slides = carrossel.getElementsByClassName("Text");
    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlide) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
}

function nextSlide(carrossel, currentSlide) {
    currentSlide = (currentSlide + 1) % carrossel.getElementsByClassName("Text").length;
    showSlide(carrossel, currentSlide);
    return currentSlide;
}

function prevSlide(carrossel, currentSlide) {
    currentSlide = (currentSlide - 1 + carrossel.getElementsByClassName("Text").length) % carrossel.getElementsByClassName("Text").length;
    showSlide(carrossel, currentSlide);
    return currentSlide;
}

prevButton1.addEventListener("click", () => {
    currentSlide1 = prevSlide(carrossel1, currentSlide1);
});
nextButton1.addEventListener("click", () => {
    currentSlide1 = nextSlide(carrossel1, currentSlide1);
});

prevButton2.addEventListener("click", () => {
    currentSlide2 = prevSlide(carrossel2, currentSlide2);
});
nextButton2.addEventListener("click", () => {
    currentSlide2 = nextSlide(carrossel2, currentSlide2);
});

prevButton3.addEventListener("click", () => {
    currentSlide3 = prevSlide(carrossel3, currentSlide3);
});
nextButton3.addEventListener("click", () => {
    currentSlide3 = nextSlide(carrossel3, currentSlide3);
});

showSlide(carrossel1, currentSlide1);
showSlide(carrossel2, currentSlide2);
showSlide(carrossel3, currentSlide3);

function toggleDescricao(elemento) {
    var retangulos = document.querySelectorAll('.retangulo');
    retangulos.forEach(function(retangulo) {
        if (retangulo !== elemento && retangulo.classList.contains('expandido')) {
            retangulo.classList.remove('expandido');
            retangulo.querySelector('.descricao').style.display = 'none';
        }
    });
    elemento.classList.toggle('expandido');
    var descricao = elemento.querySelector('.descricao');
    descricao.style.display = descricao.style.display === 'block' ? 'none' : 'block';
}
let slideIndex = 0;
mostrarSlide(slideIndex);
