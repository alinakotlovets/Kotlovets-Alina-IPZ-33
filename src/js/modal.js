// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };
//
//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//
//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.body,
    menuBtn: document.querySelector("[data-menu-button]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    refs.body.classList.add("no-scroll");
    refs.menuBtn.disabled = true; // Забороняємо натискання кнопки меню
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
    refs.menuBtn.disabled = false; // Відновлюємо можливість натискання кнопки меню
  }
})();
