$(document).ready(function() {
  // Show the Home section by default.
  showSection('home');

  // Navigation: use a data attribute for target
  $('nav ul.menu li a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    showSection(target);
  });

  // Hamburger menu toggle for mobile
  $('#menu-toggle').on('click', function() {
    $('nav ul.menu').toggleClass('active');
  });
});

// Function to show a section and hide others
function showSection(sectionId) {
  $('.content').removeClass('active').css('opacity', 0);
  $('#' + sectionId).addClass('active').animate({opacity: 1}, 500);
}
