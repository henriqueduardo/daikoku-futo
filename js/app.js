function initModal() {
  const images = document.querySelectorAll(".modal-image");
  const btnCloseModal = document.querySelectorAll(".close-button");

  if (images && btnCloseModal.length) {
    // abrir modal de acordo com o id
    function showModal(event) {
      const modalId = event.target.dataset.modal; // data
      const modal = document.getElementById(modalId); // #id
      modal.classList.add("show-modal"); // id selecionado
    }

    function closeModal(event) {
      const modalId = event.target.closest(".modal").id;
      const modal = document.getElementById(modalId);
      modal.classList.remove("show-modal");
    }

    // percorrer cada imagem
    images.forEach((image) => {
      image.addEventListener("click", showModal);
    });

    btnCloseModal.forEach((button) => {
      button.addEventListener("click", closeModal);
    });
  }
}

initModal();
