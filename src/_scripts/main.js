// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
import $ from '../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js';
import Vignette from '../_modules/vignette/vignette';

//var $ = require("../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js");
window.jQuery = $;

require('../../node_modules/foundation-sites/dist/foundation.min.js');


$(() => {
  console.log('Welcome to Yeogurt!');
  new Vignette();
});

$(document).foundation();
