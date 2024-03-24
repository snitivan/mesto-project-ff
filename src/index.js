import './styles/index.css';
import { initialCards } from './cards';

const add_icon = new URL('./images/add-icon.svg', import.meta.url);
const avatar = new URL('./images/avatar.jpg', import.meta.url);
const card_1 = new URL('./images/card_1.jpg', import.meta.url);
const card_2 = new URL('./images/card_2.jpg', import.meta.url);
const card_3 = new URL('./images/card_3.jpg', import.meta.url);
const close_img = new URL('./images/close.svg', import.meta.url);
const delete_icon = new URL('./images/delete-icon.svg', import.meta.url);
const edit_icon = new URL('./images/edit-icon.svg', import.meta.url);
const like_active = new URL('./images/like-active.svg', import.meta.url);
const like_inactive = new URL('./images/like-inactive.svg', import.meta.url);
const logo = new URL('./images/logo.svg', import.meta.url);

const images_tuple = [
  { name: 'add_icon', link: add_icon },
  { name: 'avatar', link: avatar },
  { name: 'card_1', link: card_1 },
  { name: 'card_2', link: card_2 },
  { name: 'card_3', link: card_3 },
  { name: 'close_img', link: close_img },
  { name: 'delete_icon', link: delete_icon },
  { name: 'edit_icon', link: edit_icon },
  { name: 'like_active', link: like_active },
  { name: 'like_inactive', link: like_inactive },
  { name: 'logo', link: logo },
];

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
  const card = cardData;
  const deleteButton = card.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(card)); 
  
  return card;
}

function deleteCard(cardElementDel) {
  cardElementDel.remove();
}


initialCards.forEach(function(item) {
  const cardElement = createCard(cardData(item), deleteCard);
  cardsContainer.append(cardElement);
})

// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу