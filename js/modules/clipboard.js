export default function initClipboard() {
  const btnShare = document.querySelector("[data-share='share']");
  const btnCopy = document.querySelector("[data-clipboard='copy']");

  if (btnShare && btnCopy) {
    function Clipboard() {
      function copyText() {
        let textContent = document.querySelector("[data-text='text']");
        textContent.select();
        textContent.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }

      btnCopy.addEventListener("click", copyText);
    }

    function showClipboard() {
      const copyInput = document.querySelector("[data-copy='copy-input']");
      btnShare.classList.toggle("active");
      copyInput.classList.toggle("active");
      Clipboard();
    }
    btnShare.addEventListener("click", showClipboard);
  }
}