
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



// Work Previews

var prevWork = document.querySelector('.prevWork');
var work = document.querySelector('#work-1');
var prevText = document.querySelector('#click')

function showPrev() {
  prevWork.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.85 + ')';
  prevWork.style.opacity = "1";
  prevText.style.display = "block"
}

function workShow() {
  window.location = "project-1.html";
}

prevWork.addEventListener("click", showPrev, false);
prevText.addEventListener("click", workShow, false);






var prevWork2 = document.querySelector('.prevWork-2');
var work2 = document.querySelector('#work-2');
var prevText2 = document.querySelector('#click-2')

function showPrev2() {
  prevWork2.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.85 + ')';
  prevWork2.style.opacity = "1";
  prevText2.style.display = "block"
}

function workShow2() {
  window.location = "project-1.html";
}

prevWork2.addEventListener("click", showPrev2, false);
prevText2.addEventListener("click", workShow2, false);





var prevWork3 = document.querySelector('.prevWork-3');
var work3 = document.querySelector('#work-3');
var prevText3 = document.querySelector('#click-3')

function showPrev3() {
  prevWork3.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.85 + ')';
  prevWork3.style.opacity = "1";
  prevText3.style.display = "block"
}

function workShow3() {
  window.location = "project-1.html";
}

prevWork3.addEventListener("click", showPrev3, false);
prevText3.addEventListener("click", workShow3, false);






var prevWork4 = document.querySelector('.prevWork-4');
var work4 = document.querySelector('#work-4');
var prevText4 = document.querySelector('#click-4')

function showPrev4() {
  prevWork4.style.backgroundColor = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.85 + ')';
  prevWork4.style.opacity = "1";
  prevText4.style.display = "block";
}

function workShow4() {
  window.location = "project-1.html";
}

prevWork4.addEventListener("click", showPrev4, false);
prevText4.addEventListener("click", workShow4, false);




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
