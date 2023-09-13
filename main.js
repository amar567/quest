$(document).ready(function () {

  //hamburger Toggle
  $('.humbarger').click(function (event) {
    event.preventDefault();
    $('.menu-list').slideToggle(500);

    $('.menu-list li a').click(function (event) {
      if ($(window).width() < 768) {
        $('.menu-list').slideUp(500);
        // event.preventDefault(); 
      }
    });
  });

});

// создаем navbar
var navbar = document.getElementById("navbar")

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.className = "navigation navbar"
    if (currentScrollPos > 100) {
      navbar.className = "navigation navbar makeNavVisible";
    }
    $('.menu-list').slideUp(500);
  } else if (prevScrollpos < currentScrollPos) {
    $('.menu-list').slideUp(500);
    navbar.className = "navigation navbar navbar--hidden";
  }
  prevScrollpos = currentScrollPos;
}