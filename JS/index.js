/*
const hamburgerBtn = document.getElementById('hamburger-id');

var navUl = document.getElementById('nav-menu');

hamburgerBtn.addEventListener("click", zeroLeft());

function zeroLeft()
{
     navUl.classList.add("cero-left");
     console.log("clicking");
}
*/

var hamburgerBtn = document.getElementById('hamburger-id');

function showNav()
{
     document.getElementById("nav-ul").classList.toggle('cero-left');
     console.log("clicking");
}

hamburgerBtn.addEventListener("click", showNav());


