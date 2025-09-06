


function CheckEmail() {

  let email = document.querySelector('#EmailField').value; // передали в переменную полученные данный 
  // которые введены пользователем

  if (!email.includes('@')) {

    alert('Используйте @');
  }

  else if (!email.includes('.')) {

    alert('Используйте "." ');
  }

  else {

    alert('Ваш email отправлен!');


  }

}


document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector(".nav").classList.toggle("open")
  document.querySelector('html').classList.toggle("active")
})

