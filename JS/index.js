
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
     if(menu.classList.contains("showNav")){
          menu.classList.remove("showNav");
          closeIcon.style.display = "none";
          menuIcon.style.display = "block";
     }
     else{
          menu.classList.add("showNav");
          closeIcon.style.display = "block";
          menuIcon.style.display = "none";
     }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
     function(menuItem){
          menuItem.addEventListener("click", toggleMenu);
     }
)