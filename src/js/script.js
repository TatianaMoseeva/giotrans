
const scrollBtn = document.querySelector('.btn_totop'),
      quoteBtns = document.querySelectorAll('[data-modal=quote]'),
      overlay = document.querySelector('.overlay'),
      closeBtns = document.querySelectorAll('.modal__close');


scrollBtn.addEventListener('click', scrollToTop);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
closeBtns.forEach(btn =>
  btn.addEventListener('click', closeModal)
  );
function closeModal() {
  overlay.style.display="none";
  document.body.style.overflow = '';
}
quoteBtns.forEach(btn =>
  btn.addEventListener('click', showModal)
);
function showModal(e) {
  e.preventDefault();
  document.body.style.overflow = 'hidden';
  overlay.style.display="block";
}



