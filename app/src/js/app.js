$.featherlightGallery.defaults.previousIcon = "←";
$.featherlightGallery.defaults.nextIcon = "→";

require('smoothscroll-polyfill').polyfill();
require('./modules/csso-external')();
require('./modules/csso-headroom')();
require('./modules/csso-toggle')();
require('./modules/csso-tabs')();
require('./modules/csso-menu')();
require('./modules/csso-scroll')();
