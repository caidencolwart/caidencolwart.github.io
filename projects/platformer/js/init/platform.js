(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(170, 640, 0.6, 0.5); //lowest
    createPlatform(500, 570, 0.3);// second lowest
    createPlatform(210, 500, 0.5, 0.7);// third lowest
    createPlatform(10, 450, 0.5);//fourth lowest
    createPlatform(750, 450, 0.1, 7);//pillar
    createPlatform(435, 435, 0.5, 0.5);//fifth lowest 
    createPlatform(200, 365, 0.4, 0.1); //sixth lowest
    createPlatform(13, 320, 0.4, 0.6);//seventh lowest
    createPlatform(410, 300, 0.6, 0.6 );// eight lowest
    createPlatform(700, 250, 0.5, 0.5);//ninth lowest
    createPlatform(350, 160, 0.5, 0.5);//tenth lowest
    createPlatform(100, 110, 0.2, 0.3);//highest
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
