
import { clickPopupClose } from "./modal";
import { profileDescription, profileName } from "..";

const formElement = document.querySelector('.popup_type_edit');
const nameInput = formElement.querySelector('.popup__input_type_name')
const jobInput = formElement.querySelector('.popup__input_type_description')

function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    clickPopupClose(formElement);
}

export { formElement, handleFormSubmit }