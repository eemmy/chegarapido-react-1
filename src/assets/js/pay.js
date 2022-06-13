appModal({
  modalId: 'pay-modal',
  overlayId: 'pay-modal-overlay',
  buttonId: 'btn-pay'
});

const payModal = document.getElementById('pay-modal');
const buttonsGoTo = [...document.querySelectorAll('[data-screen-target]')];

buttonsGoTo.forEach(buttonGoTo => {
  const goToScreenName = buttonGoTo.dataset.screenTarget;

  buttonGoTo.addEventListener('click', () => {
    payModal.setAttribute('data-screen-name', goToScreenName);
  });
});
