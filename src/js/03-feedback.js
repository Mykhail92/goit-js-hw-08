import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const STORAGE_KEY= 'feedback-form-state'

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInput,500))





function onSubmit(evt) { 
    evt.preventDefault()
    console.log({ email: email.value, message: message.value});

    evt.currentTarget.reset()
    localStorage.removeItem('STORAGE_KEY')
}


function onInput(evt) {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem('STORAGE_KEY', JSON.stringify(objectToSave))
}

    
   const populateTaxtArea = key => {
  try {
      const serializedState = localStorage.getItem(key);
 
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
   };

const formData = populateTaxtArea(STORAGE_KEY)
if (formData) {
    email.value = formData.email
    message.value= formData.message
   }