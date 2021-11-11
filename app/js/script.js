const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade'); // .has-fade 클래스가 포함된 태그를 모조리 배열로 저장한다.
console.log(fadeElems); // [div.overlay.has-fade, div.header__menu.has-fade]

const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
    console.log('click hamburger');
    if (header.classList.contains('open')) { // close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        // forEach loop으로 배열 요소가 하나씩 들어온다. 
        // 1. .overlay.has-fade가 들어와 fade-in을 지우고, fade-out을 추가하여 overlay 화면을 안보이게 한다. 
        // 2. .header__menu.has-fade가 들어와 fade-in을 지우고, fade-out을 추가하여 header__menu를 안보이게 한다. 
        // 이와 같은 절차로 hamburger menu가 안보이게 된다. 
        // 아래 forEach loop은 hamburger menu를 보여주는 동작을 수행한다. 
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});