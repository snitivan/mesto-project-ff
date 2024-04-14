import { clickPopupClose, clickPopupOpen } from "./modal";
import { createCard, deleteCard } from "./card";
import { popupImage, popupCaption, cardPopup } from "..";

const addCardFormElement = document.querySelector('div.popup.popup_type_new-card > .popup__content > .popup__form');
const addCardNameInput = addCardFormElement.querySelector('.popup__input_type_card-name')
const addCardPictureInput = addCardFormElement.querySelector('.popup__input_type_url')
const cardsContainer = document.querySelector('.places__list');
const addNewCard = document.querySelector('.popup_type_new-card');

function addcardFormSubmit(evt) {
    evt.preventDefault();
    const initCard  = {
      name: addCardNameInput.value,
      link: addCardPictureInput.value
    };
    const cardElement = createCard(initCard, cardPopup, popupImage, popupCaption, clickPopupOpen, deleteCard);
    cardsContainer.prepend(cardElement);
    clickPopupClose(addNewCard);
    addCardFormElement.reset();
}

export { addCardFormElement, addcardFormSubmit }