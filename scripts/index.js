const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

function cardData(item) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').alt = `Фото ${item.name}`;
  return cardElement
}

function createCard(cardData, deleteCard) {
  initialCards.forEach(function(item) {
    const cardElement = cardData(item)
    cardsContainer.append(cardElement);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => deleteCard(cardElement)); 
  })  
}

function deleteCard(cardElementDel) {
  cardElementDel.remove();
}

createCard(cardData, deleteCard);

// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу