(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  const modal = document.querySelector('.backdrop');
  const body = document.body;

// Відкриття модального вікна
  function openModal() {
    modal.classList.remove('is-hidden');
    body.classList.add('no-scroll'); // Додаємо клас, щоб заборонити скрол
  }

// Закриття модального вікна
  function closeModal() {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll'); // Видаляємо клас, щоб дозволити скрол
  }

// Додайте обробники подій для кнопок, які відкривають і закривають модальне вікно
  document.querySelector('[data-modal-close]').addEventListener('click', closeModal);
  document.querySelector('[data-modal-open]').addEventListener('click', openModal);

})();