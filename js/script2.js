
var burger = document.querySelector(".bb");
var mobileNav = document.querySelector("#mobile-nav");
var positionFixed = document.querySelector(".fixed-position")


burger.addEventListener("click", showMenu, false);
mobileNav.addEventListener("click", hideMenu, false);

function showMenu(e) {
  mobileNav.classList.add("show");
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  mobileNav.classList.add(".fixed-position");
}

function hideMenu(e) {
  mobileNav.classList.remove("show");
  document.body.style.overflow = "auto";
  mobileNav.classList.remove(".fixed-position");
  e.stopPropagation();
}


// Mobile Navigation

var myNav = document.getElementById('mobile-top-nav');
var upTop = document.getElementById('uptop')
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 1) {
    upTop.style.opacity = "0";
    myNav.style.opacity = "0";
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");

  } else {
    upTop.style.opacity = "1";
    myNav.style.opacity = "1";
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  }
};

//  Headroom


var myElement = document.querySelector("#mobile-top-nav");
var headroom  = new Headroom(myElement);

headroom.init();

// UpTop Button

myID = document.getElementById('totop')

var myScrollFunc = function() {
  var y  = window.scrollY;
  if (y >= 200) {
    myID.className = "totop show"
  } else {
    myID.className = "totop hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
