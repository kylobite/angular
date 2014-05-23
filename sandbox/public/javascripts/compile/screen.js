// Generated by CoffeeScript 1.6.3
(function() {
  var Screen;

  Screen = (function() {
    function Screen(width, height) {
      this.width = width;
      this.height = height;
      this.pixels = new Array(width * height);
    }

    Screen.prototype.test = function() {
      console.log(this.width);
      console.log(this.height);
      return console.log(this.pixels.length);
    };

    Screen.prototype.render = function() {
      var x, y, _i, _ref, _results;
      _results = [];
      for (y = _i = 0, _ref = this.height; _i <= _ref; y = _i += 1) {
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (x = _j = 0, _ref1 = this.width; _j <= _ref1; x = _j += 1) {
            _results1.push(this.pixels[x + y * this.width] = "#789");
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    return Screen;

  })();

}).call(this);
