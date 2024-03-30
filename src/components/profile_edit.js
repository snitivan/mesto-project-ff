
import { click_popup_close } from "./modal";

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name')
const jobInput = formElement.querySelector('.popup__input_type_description')
const profile_edit = document.querySelector('.popup_type_edit');

function handleFormSubmit(evt) {
    evt.preventDefault();
   
    const profile_name = document.querySelector('.profile__title');
    profile_name.textContent = nameInput.value;
  
    const profile__description = document.querySelector('.profile__description');
    profile__description.textContent = jobInput.value;

    click_popup_close(profile_edit);
}

export { formElement, handleFormSubmit }