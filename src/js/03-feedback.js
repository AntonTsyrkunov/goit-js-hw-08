import throttle from 'lodash.throttle';

const formEmailInput = document.querySelector('input');
const formTextInput = document.querySelector('textarea');
const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORE_KEY = "feedback-form-state";
let formData = {};


feedbackForm.addEventListener('submit', onFormSubmit);

feedbackForm.addEventListener('input', throttle(onTextInput, 500));

function onTextInput (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORE_KEY, JSON.stringify(formData));
}

function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORE_KEY);
}

const storageInfo = localStorage.getItem(LOCALSTORE_KEY);

function onLoad () {     
   
    formData = JSON.parse(storageInfo);
    formEmailInput.value = formData.email || '';
    formTextInput.value = formData.message || '';

}

onLoad();

