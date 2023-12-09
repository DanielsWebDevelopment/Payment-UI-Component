const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
  const cardNumber = document.getElementById('number');
  const phone = document.getElementById('phone');
  const cvv = document.getElementById('CV');
  const date = document.getElementById('date');
  const phoneError = document.getElementById('phone-error');
  const dateError = document.getElementById('date-error');
  const cardError = document.getElementById('card-error');
  const cvvError = document.getElementById('cvv-error');
  
  if (cardNumber.value === '') {
    cardError.textContent = "Invalid Card Number";
  } else {
    cardError.textContent = '';
  }
  
  if (phone.value === '') {
    phoneError.textContent = 'Invalid Phone Number';
  } else {
    phoneError.textContent = '';
  }
  
  if (cvv.value === '') {
    cvvError.textContent = 'Invalid CVV';
  } else {
    cvvError.textContent = '';
  }
  
  if (date.value === '') {
    dateError.textContent = 'Invalid Date';
  } else {
    dateError.textContent = '';
  }
  e.preventDefault();
});