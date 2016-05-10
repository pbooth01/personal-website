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

    if(scrollTop > 280){
      if(!$('#template-holder').exists()){
        $('#site-content').load('/public/templates/content-template.html');
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

      if(templateName){
        templateName = templateName + '.html';
        $('#template-holder').load("/public/templates/" + templateName, function(response, status, xhr){
          if ( status == "error" ) {
            var msg = "404 This project template does not exist";
            $( "#template-holder" ).html( msg );
          } else{
            console.log('success');
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