'use strict';

import $ from '../../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js';

export default class Vignette {
  constructor() {
    this.animate();
  }
  animate() {
    $( ".vignette-container" ).click(function() {
      $( ".vignette" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
      }, 5000, function() {
        // Animation complete.
      });
    });
  }
}
