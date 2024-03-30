import { click_popup_close } from "./modal";
import { deleteCard } from "./card";

const addcard_formElement = document.querySelector('div.popup.popup_type_new-card > .popup__content > .popup__form');
const addcard_nameInput = addcard_formElement.querySelector('.popup__input_type_card-name')
const addcard_pictureInput = addcard_formElement.querySelector('.popup__input_type_url')
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');
const add_new_card = document.querySelector('.popup_type_new-card');

function addcardFormSubmit(evt) {
    evt.preventDefault();

    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = addcard_pictureInput.value;
    cardElement.querySelector('.card__title').textContent = addcard_nameInput.value;
    cardElement.querySelector('.card__image').alt = `Фото ${addcard_nameInput.value}`;
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => deleteCard(cardElement)); 
        // Like btn
    cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like-button_is-active');
    })
    // open pic in popup
    cardElement.querySelector('.card__image').addEventListener('click', () => {
      const card_popup = document.querySelector('.popup_type_image');
      card_popup.classList.add('popup_is-opened');
      card_popup.querySelector('.popup__image').src = cardElement.querySelector('.card__image').src;
      card_popup.querySelector('.popup__image').alt = `Фото ${cardElement.querySelector('.card__title').textContent}`;
      card_popup.querySelector('.popup__caption').textContent = cardElement.querySelector('.card__title').textContent;
      card_popup.querySelector('.popup__close').addEventListener('click', () => {
        card_popup.classList.remove('popup_is-opened');
      });
    })
    cardsContainer.prepend(cardElement);
    click_popup_close(add_new_card);
    addcard_formElement.reset();
}

export { addcard_formElement, addcardFormSubmit }