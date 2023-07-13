function initModal() {
  const images = document.querySelectorAll(".modal-image");
  const btnCloseModal = document.querySelectorAll(".close-button");

  if (images && btnCloseModal.length) {
    // abrir modal de acordo com o id
    function showModal(event) {
      const modalId = event.target.dataset.modal; // data-atributes
      const modal = document.getElementById(modalId); // #id
      modal.classList.add("show-modal"); // id selecionado
    }

    function closeModal(event) {
      const modalId = event.target.closest(".modal").id;
      const modal = document.getElementById(modalId);
      modal.classList.remove("show-modal");
    }

    // fechar modal no esc
    function closeModalOnEsc(event) {
      if (event.key === "Escape") {
        const openModal = document.querySelector(".show-modal");
        if (openModal) {
          openModal.classList.remove("show-modal");
        }
      }
    }

    // percorrer cada imagem
    images.forEach((image) => {
      image.addEventListener("click", showModal);
    });

    btnCloseModal.forEach((button) => {
      button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", closeModalOnEsc);
  }
}

function initChangeImage() {
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

function initAccordion() {
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

function initAnimationScroll() {
  const content = document.querySelectorAll("[data-anime='scroll']");

  if (content.length) {
    const visibleContent = window.innerHeight * 0.6;
    function animarScroll() {
      content.forEach((section) => {
        const contentTop = section.getBoundingClientRect().top;
        const contentVisable = contentTop - visibleContent < 0;
        if (contentVisable) {
          section.classList.add("active");
        }
      });
    }
  }

  animarScroll();
  window.addEventListener("scroll", animarScroll);
}

initModal();
initChangeImage();
initAccordion();
initAnimationScroll();
