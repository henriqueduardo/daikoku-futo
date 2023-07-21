export default function initAccordion() {
  const accordion = document.querySelectorAll("[data-faq='faq'] dt");

  if (accordion.length) {
    function activeAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordion.forEach((i) => {
      i.addEventListener("click", activeAccordion);
    });
  }
}