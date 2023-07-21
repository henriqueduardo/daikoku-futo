export default function initAnimationScroll() {
  const content = document.querySelectorAll("[data-anime='scroll']");

  if (content.length) {
    const visibleContent = window.innerHeight * 0.6;
    
    function animarScroll() {
      content.forEach((section) => {
        const contentTop = section.getBoundingClientRect().top;
        const contentVisible = contentTop - visibleContent < 0;
        if (contentVisible) {
          section.classList.add("active");
        }
      });
    }
    
    animarScroll();
    window.addEventListener("scroll", animarScroll);
  }
}
