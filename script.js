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

let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 310;

  if (scrollAmount >= carousel.scrollWidth) {
    scrollAmount = 0;
  }

  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
}, 3000);