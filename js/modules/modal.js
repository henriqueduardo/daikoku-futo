export default function initModal() {
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

    // fechar modal no clique
    function closeModalOutside(event) {
      if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show-modal");
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
    document.addEventListener("click", closeModalOutside);
  }
}