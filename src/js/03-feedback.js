import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY= 'feedback-form-state'

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput,500))



function onInput() {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectToSave))
}

function onSubmit(evt) { 
    evt.preventDefault()
    console.log({ email: email.value, message: message.value});

    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function populateTaxtArea() {
  const serializedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (serializedState) {
    email.value = serializedState.email
    message.value = serializedState.message
  }
  else {
    email.value = '';
    message.value = '';
  }
}
populateTaxtArea()