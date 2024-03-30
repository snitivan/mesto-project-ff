import { addcard_formElement } from "./add_new_card";
const profile_edit = document.querySelector('.popup_type_edit');
const popup_addcard = document.querySelector(".popup_type_new-card");
const add_new_card = document.querySelector('.popup_type_new-card');

function click_popup_close(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', esc_close);
}

function click_popup_open(modal) {
  document.addEventListener('keydown', esc_close);
  modal.classList.add('popup_is-opened');
}

function close_modal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', esc_close);
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