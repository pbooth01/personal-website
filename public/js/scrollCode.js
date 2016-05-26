var ScrollModule = (function(){
  var initializeIntroScroll = function() {

    //$("#intro-content h1").wrapEach(/(.)/g, "<span>$1</span>");

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var textWidth = $('#intro-text').outerWidth();
    var imageWidth = $('#intro-image').outerWidth();

    var laola = new TimelineMax()
      .add(TweenMax.staggerTo(".width-control h1 span", 1, {top: -100, x: -75, scale: 3, color: '#000000'}, 0.7))
      .add(TweenMax.staggerTo(".width-control h1 span", 1, {top: 0, x: 0, scale: 1, color: '#000000'}, 0.7), 1);

    var molly = new TimelineMax()
      .add(TweenMax.to("#intro-image", 2, {x: (w/2 + imageWidth)}))
      .add(TweenMax.to("#intro-text", 1, {x: -(w/2 + textWidth)}));



    // init the controller
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });

    // jumping text
    new ScrollMagic.Scene({
      duration: 200,
      offset: 0
    })
      .setPin('#main')
      .setTween(laola)
      .addTo(controller);

    //sliding text off of screen
    new ScrollMagic.Scene({
      duration: 100,
      offset: 200
    })
      .setPin('#main')
      .setTween(molly)
      .addTo(controller);
  }

  return{
    initialize: initializeIntroScroll
  };

})();