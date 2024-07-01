
const cardTemplate = document.querySelector('#card-template').content;


function deleteCard(evt){
   const item = evt.target.closest('.card');
   item.remove()};



initialCards.forEach(function(card){
 addCard(card)
}) 
 function addCard (card){
   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const title = cardElement.querySelector('.card__title');
    const image = cardElement.querySelector('.card__image');
    if (card.link) {
      image.src = card.link;
   }
    if (card.name) {
      title.textContent = card.name;
    }
 
 if (card.link && card.name)
     {image.setAttribute('alt', card.name)
   }

   cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
   const placesList = document.querySelector('.places__list');
   placesList.append(cardElement);
 }

// const addButton = document.querySelector('.profile__add-button');
//  addButton.addEventListener('click', function () {
//  });

// @todo: Вывести карточки на страницу
