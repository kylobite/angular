// Generated by CoffeeScript 1.6.3
(function() {
  var BlueCtrl, ChoiceCtrl, FailSafe, FlavorCtrl, MessageCtrl, PhoneCtrl, ProjectCtrl, ProvideCtrl, RedCtrl, Route1Ctrl, Route2Ctrl, SomeCtrl, TaskCtrl, TestCtrl, ThisCtrl, TwitterCtrl, app, routeCtrl, someApp;

  app = angular.module("nglearnApp", ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]);

  app.controller("TestCtrl", TestCtrl = (function() {
    function TestCtrl($scope) {
      $scope.data = {
        message: "World"
      };
    }

    return TestCtrl;

  })());

  app.controller("ThisCtrl", ThisCtrl = (function() {
    function ThisCtrl($scope) {}

    return ThisCtrl;

  })());

  app.controller("ThatCtrl", ThisCtrl = (function() {
    function ThisCtrl($scope) {}

    return ThisCtrl;

  })());

  app.factory("Share", function() {
    return {
      message: "Lorem ipsum"
    };
  });

  app.filter("mirror", function(Share) {
    return function(text) {
      return text.split("").reverse().join("") + " " + Share.message;
    };
  });

  app.controller("RedCtrl", RedCtrl = (function() {
    function RedCtrl($scope, Share) {
      $scope.share = Share;
    }

    return RedCtrl;

  })());

  app.controller("BlueCtrl", BlueCtrl = (function() {
    function BlueCtrl($scope, Share) {
      $scope.share = Share;
      $scope.flipMessage = function(message) {
        return message.split("").reverse().join("");
      };
    }

    return BlueCtrl;

  })());

  app.factory("Project", function() {
    return {
      tools: [
        {
          name: "Node.js",
          isFor: "Server"
        }, {
          name: "Express",
          isFor: "Framework"
        }, {
          name: "Jade",
          isFor: "HTML"
        }, {
          name: "Stylus",
          isFor: "CSS"
        }, {
          name: "Coffeescript",
          isFor: "JavaScript"
        }, {
          name: "AngularJS",
          isFor: "MVC"
        }
      ]
    };
  });

  app.controller("ProjectCtrl", ProjectCtrl = (function() {
    function ProjectCtrl($scope, Project) {
      $scope.project = Project;
    }

    return ProjectCtrl;

  })());

  app.directive("fromjs", function() {
    return {
      restrict: "E",
      template: "<span>App.js made me!</span>"
    };
  });

  app.directive("fromjs", function() {
    return {
      restrict: "A",
      link: function() {
        return console.log("App.js made me here!");
      }
    };
  });

  app.directive("stacked", function() {
    return {
      restrict: "A",
      link: function() {
        return console.log("App.js stacked me here!");
      }
    };
  });

  app.directive("fromjs", function() {
    return {
      restrict: "C",
      link: function() {
        var span, text;
        span = document.createElement("span");
        text = document.createTextNode("App.js made me, too!");
        return document.getElementById("fromjs").appendChild(span).appendChild(text);
      }
    };
  });

  app.directive("hoveron", function() {
    return function(scope, element, attrs) {
      return element.bind("mouseenter", function() {
        return element.addClass(attrs.hoveron);
      });
    };
  });

  app.directive("hoveroff", function() {
    return function(scope, element, attrs) {
      return element.bind("mouseleave", function() {
        return element.removeClass(attrs.hoveron);
      });
    };
  });

  app.controller("TwitterCtrl", TwitterCtrl = (function() {
    function TwitterCtrl($scope) {
      $scope.loadMoreTweets = function() {
        return console.log("Loading tweets...");
      };
      $scope.deleteTweets = function() {
        return console.log("Deleting tweets...");
      };
    }

    return TwitterCtrl;

  })());

  app.directive("enter", function() {
    return function(scope, element, attrs) {
      return element.bind("mouseenter", function() {
        return scope.$apply(attrs.enter);
      });
    };
  });

  app.directive("player", function() {
    var Player;
    return {
      restrict: "E",
      scope: {},
      controller: Player = (function() {
        function Player($scope) {
          $scope.powers = [];
          this.addHealth = function() {
            return $scope.powers.push("health");
          };
          this.addStrength = function() {
            return $scope.powers.push("stregth");
          };
          this.addDefense = function() {
            return $scope.powers.push("defense");
          };
        }

        return Player;

      })(),
      link: function(scope, element) {
        return element.bind("mouseenter", function() {
          return console.log(scope.powers);
        });
      }
    };
  });

  app.directive("health", function() {
    return {
      require: "player",
      link: function(scope, element, attrs, player) {
        return player.addHealth();
      }
    };
  });

  app.directive("strength", function() {
    return {
      require: "player",
      link: function(scope, element, attrs, player) {
        return player.addStrength();
      }
    };
  });

  app.directive("defense", function() {
    return {
      require: "player",
      link: function(scope, element, attrs, player) {
        return player.addDefense();
      }
    };
  });

  app.controller("TaskCtrl", TaskCtrl = (function() {
    function TaskCtrl($scope) {
      $scope.logTask = function(task) {
        var div, text;
        div = document.createElement("div");
        text = document.createTextNode(task + " is done!");
        return document.getElementById("tasks").appendChild(div).appendChild(text);
      };
    }

    return TaskCtrl;

  })());

  app.directive("servant", function() {
    return {
      restrict: "A",
      scope: {
        done: "&"
      },
      template: "<input type='text' ng-model='task' placeholder='Task' class='form-control'>" + "<h3>{{task}}</h3>" + "<span ng-click='done({task:task})'>Click me!</span>"
    };
  });

  app.filter("capitalise", function() {
    return function(text) {
      return text.substring(0, 1).toUpperCase() + text.substring(1);
    };
  });

  app.controller("FlavorCtrl", FlavorCtrl = (function() {
    function FlavorCtrl($scope) {
      $scope.icecream = "vanilla";
    }

    return FlavorCtrl;

  })());

  app.directive("icecream", function() {
    return {
      scope: {
        flavor: "@"
      },
      template: "Today's ice cream flavor is: <span>{{flavor | capitalise}}</span>"
    };
  });

  app.controller("ChoiceCtrl", ChoiceCtrl = (function() {
    function ChoiceCtrl($scope) {
      $scope.drink = "soda";
    }

    return ChoiceCtrl;

  })());

  app.directive("drink", function() {
    return {
      scope: {
        choice: "="
      },
      template: "Today's drink choice is: <span>{{choice | capitalise}}</span>"
    };
  });

  app.controller("PhoneCtrl", PhoneCtrl = (function() {
    function PhoneCtrl($scope) {
      $scope.callHome = function(message) {
        return console.log("You said: " + (message || "nothing..."));
      };
    }

    return PhoneCtrl;

  })());

  app.directive("phone", function() {
    return {
      scope: {
        dial: "&"
      },
      template: "<input type='input' ng-model='value' placeholder='Message' class='form-control'>" + "<span class='hover' ng-click='dial({message:value})'>Phone home</span>"
    };
  });

  app.controller("MessageCtrl", MessageCtrl = (function() {
    function MessageCtrl($scope) {
      $scope.sendMessage = function(server, user, message) {
        return console.log(user + "@" + server + ": " + message);
      };
    }

    return MessageCtrl;

  })());

  app.directive("client", function() {
    return {
      restrict: "E",
      scope: {
        server: "@",
        user: "=",
        ping: "&"
      },
      template: "<div>Server: {{server}}</div>" + "<input type='text' ng-model='name' placeholder='Username' class='form-control'>" + "<input type='text' ng-model='value' placeholder='Message' class='form-control'>" + "<span class='hover' ng-click='ping({server: server, user: name, message: value})'>Send</span>"
    };
  });

  app.directive("transclusion", function() {
    return {
      restrict: "E",
      transclude: true,
      template: "<span>Hello from &lt;transclusion&gt;</span><div ng-transclude></div>"
    };
  });

  someApp = {};

  someApp.controllers = {};

  someApp.controllers.SomeCtrl = SomeCtrl = (function() {
    function SomeCtrl($scope) {
      this.someFunc = function() {
        return console.log("I do something");
      };
      return $scope.SomeCtrl = this;
    }

    return SomeCtrl;

  })();

  app.controller(someApp.controllers);

  app.directive("showhide", function() {
    return {
      restrict: "E",
      transclude: true,
      scope: {
        title: "@"
      },
      template: "<h2 ng-click='toggleContent()' class='hover'>{{title}}</h2>" + "<span ng-show='isContentVisible' ng-transclude></span>",
      link: function(scope) {
        scope.isContentVisible = false;
        return scope.toggleContent = function() {
          return scope.isContentVisible = !scope.isContentVisible;
        };
      }
    };
  });

  app.directive("passwordy", function() {
    var returnElement;
    returnElement = angular.element("<h3>{{model.password}}</h3>");
    this.link = function(scope, element) {
      return scope.$watch("model.password", function(value) {
        if (value !== void 0 && value.toLowerCase() === "password") {
          return returnElement.addClass("ng-output");
        } else {
          return returnElement.removeClass("ng-output");
        }
      });
    };
    return {
      restrict: "E",
      replace: true,
      templateUrl: "passwordy.html",
      compile: function(tmplElem) {
        tmplElem.append(returnElement);
        return link;
      }
    };
  });

  app.run(function($templateCache) {
    return $templateCache.put("passwordy2.html", "<div>" + "<input type='text' ng-model='model.password2' " + "placeholder='Password...' class='form-control'>" + "</div>");
  });

  app.directive("passwordy2", function($templateCache) {
    var returnElement;
    returnElement = angular.element("<h3>{{model.password2}}</h3>");
    this.link = function(scope, element) {
      return scope.$watch("model.password2", function(value) {
        if (value !== void 0 && value.toLowerCase() === "password") {
          return returnElement.addClass("ng-output");
        } else {
          return returnElement.removeClass("ng-output");
        }
      });
    };
    return {
      restrict: "E",
      replace: true,
      template: $templateCache.get("passwordy2.html"),
      compile: function(tmplElem) {
        tmplElem[0].style.marginTop = "10px";
        tmplElem.append(returnElement);
        return link;
      }
    };
  });

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "partials/route",
      controller: "Route1Ctrl",
      resolve: {
        loadPromises: routeCtrl.loadPromises
      }
    }).when("/say/:message", {
      template: "<span>URL says: {{model.message}}</span>",
      controller: "Route2Ctrl"
    }).when("/tell/:message", {
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams);
        console.log(path);
        console.log(search);
        return "/";
      }
    }).otherwise({
      redirectTo: function() {
        return "/";
      }
    });
  });

  routeCtrl = app.controller("Route1Ctrl", Route1Ctrl = (function() {
    function Route1Ctrl($scope, $q, $route) {
      var defer;
      console.log($route);
      defer = $q.defer();
      defer.promise.then(function(weapon) {
        console.log("You have my " + weapon + ".");
        return "bow";
      }).then(function(weapon) {
        console.log("And my " + weapon + ".");
        return "axe";
      }).then(function(weapon) {
        return console.log("And my " + weapon + "!");
      });
      defer.resolve("sword");
      $scope.model = {
        message: "Route provider put me here, but it took a a second."
      };
    }

    return Route1Ctrl;

  })());

  routeCtrl.loadPromises = function($q, $timeout) {
    var defer;
    defer = $q.defer();
    $timeout(function() {
      return defer.reject("Promises were rejected");
    }, 1000);
    return defer.promise;
  };

  app.controller("Route2Ctrl", Route2Ctrl = (function() {
    function Route2Ctrl($scope, $routeParams) {
      $scope.model = {
        message: $routeParams.message
      };
    }

    return Route2Ctrl;

  })());

  app.controller("FailSafe", FailSafe = (function() {
    function FailSafe($rootScope) {
      $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(event, current, previous);
        return console.log(rejection);
      });
    }

    return FailSafe;

  })());

  app.directive("error", function($rootScope) {
    return {
      restrict: "E",
      replace: true,
      template: "<span ng-show='isError'>Error: Promises were not resolved!</span>",
      link: function(scope) {
        return $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
          return scope.isError = true;
        });
      }
    };
  });

  app.config(function($provide) {
    var _age;
    _age = "";
    return $provide.provider("person", function() {
      return {
        setAge: function(value) {
          return _age = value;
        },
        $get: function() {
          return {
            name: "No Name",
            age: _age
          };
        }
      };
    });
  });

  app.config(function(personProvider) {
    return personProvider.setAge("Unknown");
  });

  app.controller("ProvideCtrl", ProvideCtrl = (function() {
    function ProvideCtrl($scope, person) {
      $scope.data = {
        name: person.name,
        age: person.age
      };
    }

    return ProvideCtrl;

  })());

}).call(this);
