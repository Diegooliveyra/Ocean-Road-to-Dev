//Menu mobile
const $body = document.querySelector("body");
const $menu = document.querySelector('.menu')
const links = document.querySelectorAll(".menu a");
const $menuBtn = document.querySelector('.menu-btn');


for (i = 0; i < links.length; i++) {
  links[i].onclick = activeMenu;
}

$menuBtn.addEventListener("click", activeMenu);

function activeMenu() {
  if (window.innerWidth < 768) {
    $menu.classList.toggle('menu-open')
    $menuBtn.classList.toggle('menu-btn-open')
    $body.classList.toggle("noscrol");
  }
}

//button scroll

window.onscroll = function(){
  scroll()
}

function scroll() {
  const btnScroll = document.querySelector('.back-to-top')
  if(document.documentElement.scrollTop > 500) {
    btnScroll.style.display= "block";
  } else {
    btnScroll.style.display= "none";
  }
}

function backToTop(){
  document.documentElement.scrollTop = 0;
}
