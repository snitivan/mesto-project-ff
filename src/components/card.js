import { clickPopupOpen, clickPopupClose } from "./modal";

const cardTemplate = document.querySelector('#card-template').content;
const cardPopup = document.querySelector('.popup_type_image');

function likeFunc(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
};

function createCard(item, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').alt = `Фото ${item.name}`;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardElement)); 
  // Like btn
  cardElement.querySelector('.card__like-button').addEventListener('click', likeFunc)
  // open pic in popup
  cardElement.querySelector('.card__image').addEventListener('click', () => {
    clickPopupOpen(cardPopup);
    cardPopup.querySelector('.popup__image').src = item.link;
    cardPopup.querySelector('.popup__image').alt = `Фото ${item.name}`;
    cardPopup.querySelector('.popup__caption').textContent = item.name;
  })
  cardPopup.querySelector('.popup__close').addEventListener('click', clickPopupClose(cardPopup))
  return cardElement;
}
   
function deleteCard(cardElementDel) {
  cardElementDel.remove();
}

export { createCard, deleteCard }