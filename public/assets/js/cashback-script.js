const transferCahsbackModal = document.getElementById('transfer-cahsback-modal');
const selectUserModal = document.getElementById('select-user-modal');
const selectUserModalOverlay = document.getElementById('select-user-modal-overlay');
const btnSelectUser = document.getElementById('btn-select-user');
const btnTransferCashback = document.getElementById('btn-transfer-cashback');
const confirmTransferModal = document.getElementById('confirm-transfer-modal');
const btnConfirmTransfer = document.getElementById('btn-confirm-transfer');

const users = [...document.getElementsByClassName('user-cash')];

users.forEach(user => {
  user.addEventListener('click', () => {
    transferCahsbackModal.setAttribute('data-user-selected', 'true');
    selectUserModal.style.display = 'none';
    selectUserModalOverlay.style.display = 'none';
  });
});

btnConfirmTransfer.addEventListener('click', () => {
  confirmTransferModal.setAttribute('data-transfer-success', 'true');
});

appModal({
  modalId: 'transfer-cahsback-modal',
  overlayId: 'transfer-cahsback-modal-overlay',
  buttonId: 'btn-open-transfer-modal',
});

appModal({
  modalId: 'select-user-modal',
  overlayId: 'select-user-modal-overlay',
  buttonId: 'btn-select-user',
});