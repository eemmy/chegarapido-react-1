const addressModal = document.getElementById('address-modal');
const buttonsGoTo = document.querySelectorAll('[data-target-screen]');

addressModal.addEventListener('hidden.bs.modal', function (event) {
  addressModal.setAttribute('data-screen-name', 'select-address');
});

buttonsGoTo.forEach(buttonGoTo => {
  buttonGoTo.addEventListener('click', () => {
    addressModal.setAttribute('data-screen-name', buttonGoTo.dataset.targetScreen);
  });
});