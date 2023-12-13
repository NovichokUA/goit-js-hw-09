// {
//   /* <form class="feedback-form" autocomplete="off">
//   <label class="feedback-label">
//     Email
//     <input class="feedback-input-email" type="email" name="email" autofocus />
//   </label>
//   <label class="feedback-label text">
//     Message
//     <textarea class="message" name="message" rows="8"></textarea>
//   </label>
//   <button class="btn-submit" type="submit">Submit</button>
// </form> */
// }

const form = document.querySelector('.feedback-form');

const myKeyLocalStorage = 'feedback-form-state';

const email = document.querySelector('.feedback-input-email');

const message = document.querySelector('.message');

const inputEmail = form.elements.email;

const textArea = form.elements.message;

form.addEventListener('input', getTextValue);
form.addEventListener('submit', submitedForm);

let objLocalStorage = JSON.parse(localStorage.getItem(myKeyLocalStorage));

inputEmail.value = objLocalStorage.email ?? '';
textArea.value = objLocalStorage.message ?? '';

let valueInput = {};

function getTextValue(event) {
  valueInput = {
    email: inputEmail.value,
    message: textArea.value,
  };
  localStorage.setItem(myKeyLocalStorage, JSON.stringify(valueInput));
  return valueInput;
}

function submitedForm(event) {
  event.preventDefault();
  if (inputEmail.value !== '' && textArea.value !== '') {
    console.log(valueInput);
    localStorage.removeItem(myKeyLocalStorage);
    form.reset();
  } else {
    console.log(alert('Заповніть всі поля'));
  }
}

// const obj = {
//   name: 'valera',
//   age: 43,
// };
// console.log(obj.name);
