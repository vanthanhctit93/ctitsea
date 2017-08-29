/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	(jQuery)(function() {

		var	$window = (jQuery)(window),
			$body = (jQuery)('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

			(jQuery)('form').placeholder();
	});

})(jQuery);

(function( $ ){
  $.fn.animateProgress = function(progress, callback) {    
    return this.each(function() {
      $(this).animate({
        width: progress+'%'
      }, {
        duration: 2000, 
        easing: 'swing',
        step: function( progress ){
          var labelEl = $('.ui-label', this),
              valueEl = $('.value', labelEl);
          
          if (Math.ceil(progress) < 20 && $('.ui-label', this).is(":visible")) {
            labelEl.hide();
          }else{
            if (labelEl.is(":hidden")) {
              labelEl.fadeIn();
            };
          }
          
          if (Math.ceil(progress) == 100) {
            labelEl.text('Done');
            setTimeout(function() {
              labelEl.fadeOut();
            }, 1000);
          }else{
            valueEl.text(Math.ceil(progress) + '%');
          }
        },
        complete: function(scope, i, elem) {
          if (callback) {
            callback.call(this, i, elem );
          };
        }
      });
    });
  };
})( jQuery );

$(function() {
  $('#progress_bar .ui-progress .ui-label').hide();
  $('#progress_bar .ui-progress').css('width', '7%');
  $('#progress_bar .ui-progress').animateProgress(43, function() {
    $(this).animateProgress(79, function() {
      setTimeout(function() {
        $('#progress_bar .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
});

$('.sw-btn').on('click', function(){
  if($(this).children().is(':checked')){
    $(this).addClass('active');
  }
  else{
    $(this).removeClass('active')
  }
});