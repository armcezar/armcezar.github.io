$(document).ready(function() {

  // Init
  var controller = new ScrollMagic.Controller();

  //build a scene
  var headerText = new ScrollMagic.Scene({
      triggerElement: '#header-text',
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle('#header-h1', 'fade-in') // add class to id
    .addTo(controller)

  var headerText = new ScrollMagic.Scene({
      triggerElement: '#header-text',
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle('#header-button', 'fade-in') // add class to id
    .addTo(controller)

  var oneText = new ScrollMagic.Scene({
      triggerElement: '#hone',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#hone', 'fade-in') // add class to id
    .addTo(controller)

  var oneText = new ScrollMagic.Scene({
      triggerElement: '#pone',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#pone', 'fade-in') // add class to id
    .addTo(controller)

  var twoText = new ScrollMagic.Scene({
      triggerElement: '#hone-2',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#hone-2', 'fade-in') // add class to id
    .addTo(controller)

  var twoText = new ScrollMagic.Scene({
      triggerElement: '#pone-2',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#pone-2', 'fade-in') // add class to id
    .addTo(controller)

  var threeText = new ScrollMagic.Scene({
      triggerElement: '#honedk',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#honedk', 'fade-in') // add class to id
    .addTo(controller)

  var threeText = new ScrollMagic.Scene({
      triggerElement: '#ponedk',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#ponedk', 'fade-in') // add class to id
    .addTo(controller)

  var fourText = new ScrollMagic.Scene({
      triggerElement: '#hone-3',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#hone-3', 'fade-in') // add class to id
    .addTo(controller)

  var fourText = new ScrollMagic.Scene({
      triggerElement: '#pone-3',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#pone-3', 'fade-in') // add class to id
    .addTo(controller)

  var fourText = new ScrollMagic.Scene({
      triggerElement: '#cta',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('#cta', 'fade-in') // add class to id
    .addTo(controller)

  var imageOne = new ScrollMagic.Scene({
      triggerElement: '.onepic',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('.onepic', 'fade-in') // add class to id
    .addTo(controller)

  var imageTwo = new ScrollMagic.Scene({
      triggerElement: '.twopic',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('.twopic', 'fade-in') // add class to id
    .addTo(controller)

  var imageThree = new ScrollMagic.Scene({
      triggerElement: '.threepic',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('.threepic', 'fade-in') // add class to id
    .addTo(controller)

  var imageFour = new ScrollMagic.Scene({
      triggerElement: '.fourpic',
      triggerHook: 0.8,
      reverse: false
    })
    .setClassToggle('.fourpic', 'fade-in') // add class to id
    .addTo(controller)
});
