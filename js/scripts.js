$('h2').click(function() {
  $('html, body').animate({ scrollTop: $('#list').offset().top }, 'slow');
  return false;
});

$('a[href*="facebook"]').prepend('<i class="fa fa-facebook-official" aria-hidden="true"></i>');
$('a[href*="register"]').prepend('<i class="fa fa-sign-in" aria-hidden="true"></i>');
$('a:not([href*="facebook"],[href*="register"])').prepend('<i class="fa fa-external-link-square" aria-hidden="true"></i>');

