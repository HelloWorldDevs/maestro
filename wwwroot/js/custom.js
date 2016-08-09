(function($) {
  $(document).ready(function(){
    var HelloWorldDevs = function () {
      this.rowLength = 3;
      this.rowNum = 1;
      that = this;
      $('.fslider.customjs').flexslider({
        selector: ".slider-wrap > .slide",
        animation: 'slide',
        easing: 'swing',
        direction: 'horizontal',
        reverse: false,
        slideshow: 'false',
        slideshowSpeed: Number(4000),
        animationSpeed: Number(300),
        pauseOnHover: false,
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
        }
      });
      $('.ui-accordion-header').click(function () {
        $(this).parent().find('.ui-accordion-content').addClass('folded');
        $(this).next().removeClass('folded');
      });
    };

    HelloWorldDevs.prototype.noOrphans = function (selectors) {
      $(selectors).each(function () {
        $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/, '&nbsp;$1'));
      });
    };

    HelloWorldDevs.prototype.smootherScroll = function () {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - $(this).attr('data-offset')
            }, 1000);
            return false;
          }
        }
      });
    };

    var HWD = new HelloWorldDevs();
    $(document).ready(function () {
      HWD.noOrphans('h1,h2,h3,h4,h5,h6,li,p');
      HWD.smootherScroll();
    });

  });
})(jQuery);