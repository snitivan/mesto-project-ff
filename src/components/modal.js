function escClose(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened')
    clickPopupClose(openedPopup);
    
  }
}

function clickPopupClose(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', escClose);
}

function clickPopupOpen(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', escClose);
}

export { clickPopupClose, clickPopupOpen };