// Generated by CoffeeScript 1.6.3
(function() {
  require.config({
    urlArgs: "nocache=" + (new Date).getTime(),
    paths: {
      "jquery": "../vendor/jquery/dist/jquery.min",
      "underscore": "../vendor/underscore/underscore",
      "backbone": "../vendor/backbone/backbone"
    }
  });

  require(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    return $(document).ready(function() {
      return console.log("Document ready...");
    });
  });

}).call(this);