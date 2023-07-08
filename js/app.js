const images = document.querySelectorAll(".cars-text-image");

function activeModal() {
  this.classList.toggle("active-modal");
}

images.forEach((image) => {
  image.addEventListener("click", activeModal);
})