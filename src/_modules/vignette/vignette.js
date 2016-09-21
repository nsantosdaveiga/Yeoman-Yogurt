'use strict';

import $ from '../../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js';

export default class Vignette {
  constructor() {
    this.name = 'vignette';
    console.log('%s module', this.name);
    this.animate();
  }
  animate() {
    console.log('me');
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
