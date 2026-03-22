/* MENU MOBILE */
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

/* ANIMAÇÃO SCROLL */
const elements = document.querySelectorAll(".fade");

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

/* ========================= */
/* CAROUSEL (SCROLL + SWIPE) */
/* ========================= */

const carousel = document.getElementById("carousel");

/* BOTÕES */
function scrollCarousel(direction) {
  const scrollAmount = 320;

  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

/* DRAG DESKTOP */
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;

  carousel.scrollLeft = scrollLeft - walk;
});

/* SWIPE MOBILE */
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2;

  carousel.scrollLeft = scrollLeft - walk;
});

/* ========================= */
/* MODAL GALERIA PROFISSIONAL */
/* ========================= */

const images = document.querySelectorAll(".carousel-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

const prevBtn = document.querySelector(".modal-btn.prev");
const nextBtn = document.querySelector(".modal-btn.next");

let currentIndex = 0;

/* ABRIR MODAL */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    currentIndex = index;
  });
});

/* FECHAR (somente clicando no fundo) */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* BOTÃO ANTERIOR */
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changeImage(-1);
});

/* BOTÃO PRÓXIMO */
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changeImage(1);
});

/* TROCAR IMAGEM */
function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  modalImg.src = images[currentIndex].src;
}

/* SWIPE NO MODAL */
let startXModal = 0;

modal.addEventListener("touchstart", (e) => {
  startXModal = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startXModal - endX > 50) changeImage(1);
  if (endX - startXModal > 50) changeImage(-1);
});