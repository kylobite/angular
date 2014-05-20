// Generated by CoffeeScript 1.6.3
(function() {
  var app, block, cancelAnimationFrame, canvas, cmd, create_canvas, ctx, draw, h, i, pixel, requestAnimFrame, requestID, w;

  app = angular.module("canvasApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]);

  canvas = null;

  ctx = null;

  w = null;

  h = null;

  create_canvas = function() {
    var cbrdr, coffs, cpad, ct, ctext, cwidth;
    ct = "Your browser does not support &lt;canvas&gt;, " + "try one of <a href='#'>these</a> instead.";
    canvas = document.createElement("canvas");
    ctext = document.createTextNode(ct);
    document.getElementById("spawn-canvas").appendChild(canvas).appendChild(ctext);
    cpad = window.getComputedStyle(canvas, null).getPropertyValue("padding");
    cbrdr = window.getComputedStyle(canvas, null).getPropertyValue("border-width");
    coffs = parseInt(cpad) * 2 + parseInt(cbrdr) * 2;
    cwidth = document.getElementsByClassName("main-content")[0].offsetWidth - coffs;
    w = canvas.width = cwidth;
    h = canvas.height = canvas.width / 16 * 9;
    return ctx = canvas.getContext("2d");
  };

  pixel = function(color, coords) {
    canvas.getContext("2d").fillStyle = color;
    return canvas.getContext("2d").fillRect(coords[0], coords[1], 1, 1);
  };

  block = function(color, coords, s) {
    canvas.getContext("2d").fillStyle = color;
    return canvas.getContext("2d").fillRect(coords[0] * s, coords[1] * s, s, s);
  };

  requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;

  requestID = null;

  i = parseInt("100", 16);

  draw = function() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#" + i.toString(16);
    ctx.fillRect(0, 0, w, h);
    i = i === parseInt("fff", 16) ? parseInt("100", 16) : i + 1;
    return requestID = requestAnimFrame(draw);
  };

  document.onkeydown = function(e) {
    var cmd, keyCode;
    if (!e) {
      e = window.event;
    }
    cmd = document.getElementById("cmd");
    if (e.target !== cmd) {
      keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode === 27) {
        return cmd.focus();
      }
    }
  };

  cmd = document.getElementById("cmd");

  cmd.onkeypress = function(e) {
    var command, exists;
    if (!e) {
      e = window.event;
    }
    if (e.keyCode === 13 || e.which === 13) {
      command = cmd.value.toLowerCase();
      exists = document.getElementsByTagName("canvas")[0] !== void 0;
      cmd.value = "";
      switch (command) {
        case "start":
          if (exists) {
            return requestID = requestAnimationFrame(draw);
          }
          break;
        case "stop":
          if (exists) {
            return cancelAnimationFrame(requestID);
          }
          break;
        case "clear":
          if (exists) {
            cancelAnimationFrame(requestID);
            return ctx.clearRect(0, 0, w, h);
          }
          break;
        case "create":
          if (!exists) {
            return create_canvas();
          }
          break;
        case "remove":
          if (exists) {
            return canvas.parentNode.removeChild(canvas);
          }
          break;
        default:
          return console.log("Invalid command");
      }
    }
  };

}).call(this);
