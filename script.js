


function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

/* ANIMAÇÃO SCROLL */
const elements = document.querySelectorAll('.fade');

function showOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);

/* CAROUSEL AUTO */
const carousel = document.getElementById("carousel");

/* BOTÕES */
function scrollCarousel(direction) {
  const scrollAmount = 320;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

/* SWIPE MOBILE */
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

/* TOUCH */
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

