// Hover Preview Work
$("#work-1").hover(function() {
  $('.overlay').toggleClass("overlay_hover");
  $('.home-preview-text').toggleClass("home-preview-text_hover fadeInUp");
});
$("#work-2").hover(function() {
  $('.overlay2').toggleClass("overlay_hover2");
  $('.home-preview-text2').toggleClass("home-preview-text_hover2 fadeInUp");
});
$("#work-3").hover(function() {
  $('.overlay3').toggleClass("overlay_hover3");
  $('.home-preview-text3').toggleClass("home-preview-text_hover3 fadeInUp");
});
$("#work-4").hover(function() {
  $('.overlay4').toggleClass("overlay_hover4");
  $('.home-preview-text4').toggleClass("home-preview-text_hover4 fadeInUp");
});
$("#work-5").hover(function() {
  $('.overlay5').toggleClass("overlay_hover5");
  $('.home-preview-text5').toggleClass("home-preview-text_hover5 fadeInUp");
});
$("#work-6").hover(function() {
  $('.overlay6').toggleClass("overlay_hover6");
  $('.home-preview-text6').toggleClass("home-preview-text_hover6 fadeInUp");
});


// Transition Animations

(function() {
  var unload = {};
  unload.init = function() {
    //cache html element
    unload.$html = $(document.documentElement);

    //attach event
    $(window).on('beforeunload', unload.fadeOut);
  }

  unload.fadeOut = function(e) {
    unload.$html.addClass('fadeOut');

    //set fallback
    setTimeout(unload.failed, 5000);
  }

  //useful if the user comes back, the loading fails, or it takes way too long
  unload.failed = function() {
    unload.$html.removeClass('fadeOut');
  }

  //set this whole thing up on DOMready
  $(unload.init);
  return unload;
})();


// Menu Animation

$('.menu-wrapper').click(function(e) {
  $('#wrapper-body').toggleClass('hide-links')
  event.stopImmediatePropagation();
  $('.menu').toggleClass("close");
  $('header').toggleClass("show");
  $('#logo').toggleClass("hide");
  $('body').toggleClass("hide");
  setTimeout(function() {
    $('nav').toggleClass("show");
  }, 100);
});


// Hide&Show Header on Scroll

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;


  if (st > lastScrollTop && st > navbarHeight) {

    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }

  }
  lastScrollTop = st;
}
