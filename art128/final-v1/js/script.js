document.addEventListener('DOMContentLoaded', function() {

    
// TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
const menubutton = document.querySelector('.menu-button');
const menunav = document.querySelector('.toggle-nav');
menubutton.addEventListener('click', function () {
    if (menunav.getAttribute('data-navstate') === 'open')  {
        menunav.setAttribute('data-navstate' , 'closed');
    } else {
        menunav.setAttribute('data-navstate', 'open');
    };

});

   //STICKY NAV - CLOSE THE NAV ON STICKY HEADER NAV LINK CLICKS
   const stickynavlinks = document.querySelectorAll(".sticky nav a");
   for (var i = 0; i < stickynavlinks.length; i++) {
       stickynavlinks[i].addEventListener('click', function () {
           menunav.setAttribute('data-navstate', 'closed');
       });
   };

});