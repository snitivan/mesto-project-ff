const cardTemplate = document.querySelector('#card-template').content;


function likeFunc(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
};

function createCard(item, cardPopup, popupImage, popupCaption, clickPopupOpen, deleteCard) {
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
    popupImage.src = item.link;
    popupImage.alt = `Фото ${item.name}`;
    popupCaption.textContent = item.name;
  })
  return cardElement;
}
   
function deleteCard(cardElementDel) {
  cardElementDel.remove();
}

export { createCard, deleteCard }