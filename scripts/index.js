const cardTemplate = document.querySelector('#card-template').content;
const cardsOnPage = document.querySelector('.places__list');


initialCards.forEach(function(item) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = item['link'];
  cardElement.querySelector('.card__title').textContent = item['name'];
  cardsOnPage.append(cardElement);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function () {
    deleteCard(deleteButton);
  }); 
})

function deleteCard(deleteButton) {
  const cardItem = deleteButton.closest('.places__item');
  cardItem.remove();
}



// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу