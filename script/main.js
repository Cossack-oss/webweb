new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



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


