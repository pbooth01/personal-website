var ScrollModule = (function(){
  var initializeIntroScroll = function(){

    $("#intro-content h1").wrapEach(/(.)/g, "<span>$1</span>");

    var laola = new TimelineMax()
      .add(TweenMax.staggerTo("#intro-content h1 span", 1, {top: -150, x: -75, scale: 3, color: '#ff4468' }, 0.7))
      .add(TweenMax.staggerTo("#intro-content h1 span", 1, {top: 0, x: 0, scale: 1, color: '#000000'}, 0.7), 1);

    // init the controller
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });

    // jumping text
    new ScrollMagic.Scene({
      duration: 200,
      offset: 450
    })
      .setTween(laola)
      .addTo(controller);
  };

  return{
    initialize: initializeIntroScroll
  };

})();