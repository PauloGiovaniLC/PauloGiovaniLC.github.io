(() => {
  const modal = document.getElementById('certModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');
  const certButtons = document.querySelectorAll('.cert-list button');
  let currentIndex = -1;

  const certs = Array.from(certButtons).map(btn => ({
    title: btn.dataset.title,
    desc: btn.dataset.desc,
    img: btn.dataset.img,
  }));

  function openModal(index) {
    if (index < 0) index = certs.length - 1;
    if (index >= certs.length) index = 0;
    currentIndex = index;
    const cert = certs[index];
    modalTitle.textContent = cert.title;
    modalDesc.textContent = cert.desc;
    modalImg.src = cert.img;
    modalImg.alt = `Imagem do certificado: ${cert.title}`;
    modal.style.display = 'block';
    modalClose.focus();
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  function showPrev() {
    openModal(currentIndex - 1);
  }

  function showNext() {
    openModal(currentIndex + 1);
  }

  certButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => openModal(i));
  });

  modalClose.addEventListener('click', closeModal);
  modalPrev.addEventListener('click', showPrev);
  modalNext.addEventListener('click', showNext);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    }
  });
})();

// Abertura do modal ao clicar no link "Veja meus certificados"
document.getElementById("openCertModal")?.addEventListener("click", function (e) {
  e.preventDefault();
  const firstBtn = document.querySelector(".cert-list button");
  if (firstBtn) {
    firstBtn.click();
  }
});
