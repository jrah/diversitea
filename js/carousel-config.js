/* global document:true*/

const mySiema = new Siema({
  selector: '.carousel',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: false,
  onInit: () => {},
  onChange: () => {},
});


const siemaOption = document.querySelectorAll('.carousel__option');

for(var i = 0; i<siemaOption.length; i++) {
    const siemaList = siemaOption[i];
    const siemaPrev = document.querySelector('.carousel__prev');
    const siemaNext = document.querySelector('.carousel__next');
    siemaList.addEventListener('click', (e) => {
    if (e.target === siemaPrev) {
      siemaNext.classList.remove('carousel--active-item');
      e.target.classList.add('carousel--active-item');
      mySiema.prev();
    } else {
      siemaPrev.classList.remove('carousel--active-item');
      e.target.classList.add('carousel--active-item');
      mySiema.next();
    }
  });
}
