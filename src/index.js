import './styles/index.css';
import { initialCards } from './cards';
import { _ } from 'core-js';
import { createCard, deleteCard } from './components/card';
import { click_popup_close, click_popup_open, close_modal } from './components/modal';
import { addcard_formElement, addcardFormSubmit } from './components/add_new_card';
import { formElement, handleFormSubmit } from './components/profile_edit';

const cardsContainer = document.querySelector('.places__list');

initialCards.forEach(function(item) {
  const cardElement = createCard(item, deleteCard);
  cardsContainer.append(cardElement);
})

const profile_edit_btn = document.querySelector('.profile__edit-button');
const profile_edit = document.querySelector('.popup_type_edit');
const popup = document.querySelector('.popup');
const popup_addcard = document.querySelector(".popup_type_new-card");
const popup_close_btn_profile = document.querySelector('.popup__close');
const popup_close_btn_addcard = document.querySelector('.popup_type_new-card > .popup__content > .popup__close');
const add_new_card_btn = document.querySelector('.profile__add-button');
const add_new_card = document.querySelector('.popup_type_new-card');

profile_edit_btn.addEventListener('click', function() {
  click_popup_open(profile_edit)
  const profile_name = document.querySelector('.profile__title').textContent;
  const profile_description = document.querySelector('.profile__description').textContent;
  const edit_profile_form = document.forms.edit_profile;
  const name = edit_profile_form.name;
  const description = edit_profile_form.description;
  name.value = profile_name;
  description.value = profile_description;
})

popup.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    click_popup_close(profile_edit);
  };
});

popup_addcard.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    click_popup_close(add_new_card);
    addcard_formElement.reset();
  };
});

popup_close_btn_profile.addEventListener('click', () => {
  click_popup_close(profile_edit);
})

popup_close_btn_addcard.addEventListener('click', () => {
  click_popup_close(add_new_card);
  addcard_formElement.reset();
})

add_new_card_btn.addEventListener('click', function() {
  click_popup_open(add_new_card);
})

// Form profile submit

formElement.addEventListener('submit', handleFormSubmit); 

// Form add_card submit

addcard_formElement.addEventListener('submit', addcardFormSubmit); 
