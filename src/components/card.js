const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').alt = `Фото ${item.name}`;

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
    card_popup.querySelector('.popup__image').src = item.link;
    card_popup.querySelector('.popup__image').alt = `Фото ${item.name}`;
    card_popup.querySelector('.popup__caption').textContent = item.name;
    card_popup.querySelector('.popup__close').addEventListener('click', () => {
      card_popup.classList.remove('popup_is-opened');
    })
  })
  return cardElement;
}
   
function deleteCard(cardElementDel) {
  cardElementDel.remove();
}

export { createCard, deleteCard }