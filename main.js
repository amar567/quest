$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          // event.preventDefault(); 
        }
      });
});

});

// создаем navbar
var navbar = document.getElementById("navbar")



// на сколько прокрутили в прошлый раз
var lastScroll = 0;
// текущая прокрутка
var currentScroll;


// когда прокручивается страница
window.addEventListener("scroll", throttle(callback, 250));

// возвращает функцию через определенное количество времени
function throttle(func, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      func();
      time = Date.now();
    }
  };
}

function callback() {
  // определяем на сколько прокрутили
  currentScroll = window.pageYOffset;

  // прячем или показываем navbar
  pushNavbar(lastScroll, currentScroll);


  // запоминаем на сколько прокрутили страницу
  lastScroll = currentScroll;
}

// прячет или показывает navbar, когда прокручивают страницу
function pushNavbar(lastScroll, currentScroll) {
  // если прокрутили вниз - прячем
  if (currentScroll > lastScroll)
    navbar.className = "navigation navbar navbar--hidden";
  // если вверх - показываем
  else
    navbar.className = "navigation navbar";
}