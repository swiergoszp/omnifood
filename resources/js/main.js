// doc ready func
$(document).ready(function() {

// -------------------------------
// STICKY NAVIGATION
// -------------------------------

// func for sticky nav using WAYPOINTS jquery plugin
$('.waypoints').waypoint(function(direction) {
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px'
});

// -------------------------------
// BUTTON ANIMATION
// -------------------------------

// "I'm Hungry" button scroll animation
$('.scroll-to-plan').click(function() {
  $('html, body').animate({scrollTop: $('.sign-up').offset().top}, 1200);
});

// "Show me more" button scroll animation
$('.scroll-to-start').click(function() {
  $('html, body').animate({scrollTop: $('.features').offset().top}, 500);
});

// -------------------------------
// NAV ANIMATION
// -------------------------------

// nav scrolling with SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// -------------------------------
// SCROLL ANIMATIONS (ON PAGE)
// -------------------------------

// fade in animation for features
$('.fade-in').waypoint(function(direction) {
  $('.fade-in').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.slide-in-up').waypoint(function(direction) {
  $('.slide-in-up').addClass('animated slideInUp');
}, {
  offset: '50%'
});

$('.fade-in-2').waypoint(function(direction) {
  $('.fade-in-2').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.pulse-ani').waypoint(function(direction) {
  $('.pulse-ani').addClass('animated pulse');
}, {
  offset: '50%'
});

// -------------------------------
// MOBILE NAVIGATION
// -------------------------------

// reveals nav on mobile on click and change icon based on click
$('.nav-icon').on('click', function() {
  const nav = $('.js-nav');
  const icon = $('.nav-icon i');

  nav.slideToggle(200);

  if (icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round').removeClass('ion-navicon-round')
  } else {
      icon.addClass('ion-navicon-round').removeClass('ion-close-round')
  }

});

});