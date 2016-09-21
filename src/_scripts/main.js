// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import $ from '../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js';
import Vignette from '../_modules/vignette/vignette';

window.jQuery = $;

require('../../node_modules/foundation-sites/dist/foundation.min.js');


$(() => {
  new Vignette();
});

$(document).foundation();
