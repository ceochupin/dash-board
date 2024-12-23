import '../styles/variables.css';
import '../styles/font.css';
import '../styles/global.css';
import '../styles/style.css';

import { cards } from './cards.js'

const cardTemplate = document.querySelector('#cardTemplate');
const cardPlace = document.querySelector('.content__cards');

const typeCard = {
  low: 'card__container_low',
  normal: 'card__container_normal',
  high: 'card__container_high',
}

const createCard = (card) => {
  const cardElement = cardTemplate.content.querySelector('.card__container').cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardText = cardElement.querySelector('.card__text');

  cardElement.classList.add(typeCard[`${card.type}`])
  cardTitle.textContent = card.title;
  cardText.textContent = card.description;

  return cardElement;
}

cards.forEach((card) => {
  const cardElement = createCard(card);
  cardPlace.append(cardElement);
})