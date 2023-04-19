
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveState = throttle(function () {
	const state = {
      email: emailInput.value,
      message: messageTextarea.value,
   };
   localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

form.addEventListener('input', saveState);

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedState) {
   emailInput.value = savedState.email;
   messageTextarea.value = savedState.message;
}

form.addEventListener('submit', function (event) {
   event.preventDefault();

   const state = {
      email: emailInput.value,
      message: messageTextarea.value,
   };

   console.log('Form state:', state);

   localStorage.removeItem(STORAGE_KEY);

   emailInput.value = '';
   messageTextarea.value = '';
});
