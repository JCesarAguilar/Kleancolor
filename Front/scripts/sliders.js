document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#slider figure");
  let current = 0;

  setInterval(() => {
    // Ocultar slide actual
    slides[current].classList.remove("opacity-100");
    slides[current].classList.add("opacity-0");

    // Calcular siguiente
    current = (current + 1) % slides.length;

    // Mostrar el nuevo slide
    slides[current].classList.remove("opacity-0");
    slides[current].classList.add("opacity-100");
  }, 4000); // cada 4 segundos
});
