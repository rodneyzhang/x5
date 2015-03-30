var X5 = window.X5 = Ember.Application.create();


/**********external dependencies******************/
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse");
require("bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab");
require("bower_components/metisMenu/dist/metisMenu.min");
require("bower_components/slimScroll/jquery.slimscroll.min");
require("bower_components/inspinia/assets/js/inspinia");
require("bower_components/inspinia/assets/js/plugins/pace/pace.min");
require("bower_components/jquery.gritter/js/jquery.gritter.min");
require("bower_components/jquery-ui/jquery-ui.min");
require("bower_components/toastr/toastr.min");

/* Order and include as you please. */
require('scripts/config/*');
require('scripts/base/*');
require('scripts/utils/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

