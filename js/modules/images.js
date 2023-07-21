export default function initChangeImage() {
  const imageFull = document.querySelector(".js-image-full-content");
  const imagesScroll = document.querySelectorAll(".js-scroll-images");

  if (imageFull && imagesScroll.length) {
    // src das imagens
    function changeImage(event) {
      const clickedImage = event.target;
      // transição
      imageFull.classList.add("hide-image");
      // atualizar e exibir imagem
      setTimeout(function () {
        imageFull.src = clickedImage.src;
        // esconder imagem
        imageFull.classList.remove("hide-image");
      }, 300);
    }

    imagesScroll.forEach((image) => {
      image.addEventListener("click", changeImage);
    });
  }
}