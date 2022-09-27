import Throttle from 'lodash.throttle';

const formHTML = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const dataJSON = localStorage.getItem('feedback-form-state');
const data = dataJSON === null ? {} : JSON.parse(dataJSON);

function takeLocalStorage() {
  const { email: email = '', message: message = '' } = data;
  input.value = email;
  textarea.value = message;
}

function formNewLocalStorage(e) {
  data.email = input.value;
  data.message = textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function cleaneFormAndLocalStorage(e) {
  e.preventDefault();
  if (input.value && textarea.value) {
    console.log('email = ', input.value);
    console.log('message = ', textarea.value);
    localStorage.removeItem('feedback-form-state');
    formHTML.reset();
  }
}

takeLocalStorage();

formHTML.addEventListener('input', Throttle(formNewLocalStorage));

formHTML.addEventListener('submit', cleaneFormAndLocalStorage);
