var ScrollEffectModule = (function(){

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



  var ScrollEffects = function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
      fadeIn();
      bounce();
    });
  };

  var FroggerEffect = function(){
    
    var viewPortHeight = $(window).height();
    
    $('#frogger-game').height(viewPortHeight - 100);
  };

  return{
    initialize: ScrollEffects,
    initializeFrogger: FroggerEffect
  };

})();