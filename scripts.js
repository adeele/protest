$('h2').click(function() {
  $('html, body').animate({ scrollTop: $('#list').offset().top }, 'slow');
  return false;
});
