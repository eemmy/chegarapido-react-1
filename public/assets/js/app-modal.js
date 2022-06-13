function appModal ({ modalId, overlayId, buttonId }) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById(overlayId);
  const button = document.getElementById(buttonId);
  const buttonsClose = [...document.querySelectorAll(`#${modalId} .close-modal`)];

  if (button) {
    button.addEventListener('click', () => {
      overlay.style.display = 'block';
      modal.style.display = 'block';
    });
  }


  if (buttonsClose) {
    buttonsClose.forEach((buttonClose) => {
      buttonClose.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';

        modal.setAttribute('data-screen-name', 'select-payment-method');
      });
    });
  }

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';

    modal.setAttribute('data-screen-name', 'select-payment-method');
  });
}