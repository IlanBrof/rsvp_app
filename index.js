const firstNameInput = document.querySelector('#nameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const input = document.querySelector('.form__input');
const form = document.querySelector('.form__inputs');
const submitButton = document.querySelector('#submitButton');
const rsvpListButton = document.querySelector('#rsvpListButton');
const backButton = document.querySelector('#backButton');
const rsvpList = document.querySelector('.form-list__container');
const rsvpListContent = document.querySelector('.form__rsvp-list');
const rsvpListElement = document.querySelectorAll('.form__list-item');

const fullName = firstNameInput.value + lastNameInput.value;

submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    const paragraph = document.createElement('p');
    paragraph.classList.add('form__list-item');
    paragraph.innerText = firstNameInput.value + ' ' + lastNameInput.value;
    rsvpListContent.appendChild(paragraph);  
    form.reset();
})

function showRsvpList() {
    rsvpListButton.addEventListener('click', () => {
        rsvpList.classList.remove('form-list__container_hidden');
    });
}
showRsvpList();

function hideRsvpList() {
    backButton.addEventListener('click', () => {
        rsvpList.classList.add('form-list__container_hidden');
    });
}
hideRsvpList();