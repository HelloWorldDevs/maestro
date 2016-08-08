(function($) {
  $(document).ready(function(){
    $('.fslider.customjs').flexslider({
      selector: ".slider-wrap > .slide",
      animation: 'slide',
      easing: 'swing',
      direction: 'horizontal',
      reverse: false,
      slideshow: 'false',
      slideshowSpeed: Number(5000),
      animationSpeed: Number(600),
      pauseOnHover: true,
      video: false,
      controlNav: true,
      directionNav: false,
      smoothHeight: false,
      useCSS: true,
      touch: true,
      start: function (slider) {
        SEMICOLON.widget.animations();
        SEMICOLON.initialize.verticalMiddle();
        slider.removeClass('preloader2');
      },
      after: function () {
      }
    });
    $('.ui-accordion-header').click(function () {
      $(this).parent().find('.ui-accordion-content').addClass('folded');
      $(this).next().removeClass('folded');
    });
  });
})(jQuery);