const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
if (menuToggle){
  menuToggle.addEventListener('click',function(e){
    document.body.classList.toggle('lock');
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active");

  });
}
