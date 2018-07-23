$(document).ready(function(){
    $('.carousel').carousel({
      interval: 3000,
      wrap: true
    })
  });
  
  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}