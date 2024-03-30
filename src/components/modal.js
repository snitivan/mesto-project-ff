function click_popup_close(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', esc_close);
}

function click_popup_open(modal) {
  document.addEventListener('keydown', esc_close);
  modal.classList.add('popup_is-opened');
}

function esc_close(evt) {
  //console.log(evt.key)
  if (evt.key === 'Escape') {
    if (profile_edit.classList.contains('popup_is-opened')) {
      close_modal(profile_edit);
    };
    if (popup_addcard.classList.contains('popup_is-opened')) {
      close_modal(add_new_card);
      addcard_formElement.reset();
    };
  }
};

export { click_popup_close, click_popup_open };