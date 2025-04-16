const carousel = document.querySelector(".image-carousel");
const images = carousel.querySelectorAll("img");

let currentIndex = 0;
let startX = 0;
let endX = 0;

// Função pra mostrar a imagem atual
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Inicializa com a primeira imagem
showImage(currentIndex);

// Detecta toque inicial
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Detecta toque final e define direção
carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const delta = endX - startX;
  const threshold = 50; // Tamanho mínimo do swipe

  if (Math.abs(delta) > threshold) {
    if (delta > 0) {
      // Swipe pra direita → imagem anterior
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      // Swipe pra esquerda → próxima imagem
      currentIndex = (currentIndex + 1) % images.length;
    }
    showImage(currentIndex);
  }
}
