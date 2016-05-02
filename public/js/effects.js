var ScrollEffectModule = (function(){
  var ScrollEffect = function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.fade-in').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

          $(this).animate({'opacity':'1'},500);

        }

      });

    });
  };

  var FroggerEffect = function(){
    
    var viewPortHeight = $(window).height();
    
    $('#frogger-game').height(viewPortHeight - 100);
  };

  return{
    initialize: ScrollEffect,
    initializeFrogger: FroggerEffect
  };

})();