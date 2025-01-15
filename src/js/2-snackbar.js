
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);
  const delay = Number(formData.get('delay')); // Затримка у мілісекундах
  const state = formData.get('state'); // Обраний стан (fulfilled/rejected)

  
  createPromise(delay, state)
    .then((message) => {
      iziToast.success({
        title: 'Success',
        message,
        position: 'topRight',
      });
    })
    .catch((message) => {
      iziToast.error({
        title: 'Error',
        message,
        position: 'topRight',
      });
    });
});


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
