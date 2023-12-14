function debounce(callee, timeoutMs) {
  return function perform(...args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

const form = document.querySelector('.feedback-form');

const myKeyLocalStorage = 'feedback-form-state';

const email = document.querySelector('.feedback-input-email');

const message = document.querySelector('.message');

const inputEmail = form.elements.email;

const textArea = form.elements.message;

form.addEventListener('input', debounce(getTextValue, 500));
form.addEventListener('submit', submitedForm);

let dataForm = JSON.parse(localStorage.getItem(myKeyLocalStorage)) || {};

inputEmail.value = dataForm.email ?? '';
textArea.value = dataForm.message ?? '';

function getTextValue(event) {
  dataForm = {
    email: inputEmail.value,
    message: textArea.value,
  };
  localStorage.setItem(myKeyLocalStorage, JSON.stringify(dataForm));
  return dataForm;
}

function submitedForm(event) {
  event.preventDefault();
  if (inputEmail.value !== '' && textArea.value !== '') {
    console.log(dataForm);
    localStorage.removeItem(myKeyLocalStorage);
    form.reset();
  } else {
    console.log(alert('Заповніть всі поля'));
  }
}
