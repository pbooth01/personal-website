var EffectsModule = (function(){

  function throttle (callback, limit) {
    var wait = false;

    return function () {
      if (!wait) {
        callback.call();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    }
  }

  var check_if_in_view = function() {

    //Cache reference to window and animation items. Move to differnt location so it's not being called everytime
    var $animation_elements = $('.animation-element');
    var $window = $(window);


    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.removeClass('hide');
        $element.addClass('fadeBottom');
      }
    });
  }

  var fadeIn = function(){
    /* Check the location of each desired element */
    $('.fade-in').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
  };

  var bounce = function(){
    var scrollTop = $(window).scrollTop();

      if(scrollTop > 301 ){
        if(!$('#second-intro-slide.finished-animation').exists()){
          var firstSlideHeight = $('#first-intro-slide').height();

          $('#second-intro-slide img').height('100%');
          $('#second-intro-slide')
            .animate({
              bottom: '0',
              display: 'block'
            }, 400);
          $("#second-intro-slide").effect( "bounce", {times:3}, 500 );

          $('#second-intro-slide').addClass('finished-animation');
      }
    } else{
      $('#second-intro-slide').removeClass('finished-animation');
      $('#second-intro-slide').fadeOut('slow', function(){
        $(this).css('display', 'none');
      });
    }
  }

  /*handles the on scroll events that need to occur*/
  var scrollFactory = function(){
    var scrollTop = $(window).scrollTop();
    check_if_in_view();
    if(scrollTop > 270){
      if(!$('#template-holder').exists()){
        $('#intro-content-wrapper').css('display', 'none');
        $('#site-content').load('/public/templates/content-template.html', function(){
          templateLoader();
        });
      }
    }else{
      if($('#template-holder').exists()){
        $('#intro-content-wrapper').css('display', 'initial');
      }
    }
  };

  /*handles template rendering from article clicks*/
  var eventBlocker = function(){
    $('article > a').click(function(event){
      event.preventDefault();
    });
  };

  var templateLoader = function(){

    eventBlocker();

    $('.features article').on('click', function(event){

      var templateName = event.delegateTarget.dataset.template;
      var section = '#' + templateName.split('-')[0];

      if(templateName){
        templateName = templateName + '.html';
        $('#template-holder').load("/public/templates/" + templateName, function(response, status, xhr){
          if ( status == "error" ) {
            var msg = "404 This project template does not exist";
            $( "#template-holder" ).html( msg );
          } else{
            $('.about-me-content').slideUp();
            $(section).slideDown(1000);
            console.log(section);
          }
        })
      }
    });
  };

  var ScrollEffects = function() {
    /* Every time the window is scrolled ... */
    $(window).scroll(throttle(scrollFactory, 200));
  };

  var FroggerEffect = function(){
    
    var viewPortHeight = $(window).height();
    
    $('#frogger-game').height(viewPortHeight - 100);
  };

  return{
    initialize: ScrollEffects,
    initializeFrogger: FroggerEffect,
    templateLoader: templateLoader
  };

})();