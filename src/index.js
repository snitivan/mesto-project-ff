import './styles/index.css';
import { initialCards } from './cards';
import { _ } from 'core-js';
import { createCard, deleteCard } from './components/card';
import { clickPopupClose, clickPopupOpen } from './components/modal';
import { addCardFormElement, addcardFormSubmit } from './components/addNewCard';
import { formElement, handleFormSubmit } from './components/profileEdit';

const cardsContainer = document.querySelector('.places__list');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupCloseBtnAddCard = document.querySelector('.popup_type_new-card > .popup__content > .popup__close');
const addNewCardBtn = document.querySelector('.profile__add-button');
const addNewCard = document.querySelector('.popup_type_new-card');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const closeButton = document.querySelectorAll('.popup__close');
const cardPopup = document.querySelector('.popup_type_image');
const popupImage = cardPopup.querySelector('.popup__image')
const popupCaption = cardPopup.querySelector('.popup__caption')

initialCards.forEach(function(item) {
  const cardElement = createCard(item, cardPopup, popupImage, popupCaption, clickPopupOpen, deleteCard);
  cardsContainer.append(cardElement);
})

profileEditBtn.addEventListener('click', function() {
  clickPopupOpen(profileEdit)
  const editProfileForm = document.forms.edit_profile;
  const name = editProfileForm.name;
  const description = editProfileForm.description;
  name.value = profileName.textContent;
  description.value = profileDescription.textContent;
})

profileEdit.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup_type_edit')) {
    clickPopupClose(profileEdit);
  };
});

cardPopup.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup_type_image')) {
    clickPopupClose(cardPopup);
  };
});

popupAddCard.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup_type_new-card')) {
    clickPopupClose(popupAddCard);
    addCardFormElement.reset();
  };
});

closeButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => clickPopupClose(popup));
})

popupCloseBtnAddCard.addEventListener('click', () => {
  addCardFormElement.reset();
})

addNewCardBtn.addEventListener('click', function() {
  clickPopupOpen(addNewCard);
})

// Form profile submit

formElement.addEventListener('submit', handleFormSubmit); 

// Form add_card submit

addCardFormElement.addEventListener('submit', addcardFormSubmit); 

export {profileName , profileDescription, cardPopup, popupImage, popupCaption}