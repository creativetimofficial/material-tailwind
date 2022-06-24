export default function ripple() {
  "use strict";
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var Ripple = (function () {
    "use strict";
    function Ripple() {
      _classCallCheck(this, Ripple);
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }
    _createClass(Ripple, [
      {
        key: "findFurthestPoint",
        value: function findFurthestPoint(
          clickPointX,
          elementWidth,
          offsetX,
          clickPointY,
          elementHeight,
          offsetY
        ) {
          this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
          this.y =
            clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
          this.z = Math.hypot(
            this.x - (clickPointX - offsetX),
            this.y - (clickPointY - offsetY)
          );
          return this.z;
        },
      },
      {
        key: "appyStyles",
        value: function appyStyles(element, color, rect, radius, event) {
          element.classList.add("ripple");
          element.style.backgroundColor =
            color === "dark" ? "rgba(0,0,0, 0.2)" : "rgba(255,255,255, 0.3)";
          element.style.borderRadius = "50%";
          element.style.pointerEvents = "none";
          element.style.position = "absolute";
          element.style.left = event.clientX - rect.left - radius + "px";
          element.style.top = event.clientY - rect.top - radius + "px";
          element.style.width = element.style.height = radius * 2 + "px";
        },
      },
      {
        key: "applyAnimation",
        value: function applyAnimation(element) {
          element.animate(
            [
              { transform: "scale(0)", opacity: 1 },
              { transform: "scale(1.5)", opacity: 0 },
            ],
            { duration: 500, easing: "linear" }
          );
        },
      },
      {
        key: "create",
        value: function create(event, color) {
          var element = event.currentTarget;
          element.style.position = "relative";
          element.style.overflow = "hidden";
          var rect = element.getBoundingClientRect();
          var radius = this.findFurthestPoint(
            event.clientX,
            element.offsetWidth,
            rect.left,
            event.clientY,
            element.offsetHeight,
            rect.top
          );
          var circle = document.createElement("span");
          this.appyStyles(circle, color, rect, radius, event);
          this.applyAnimation(circle);
          element.appendChild(circle);
          setTimeout(function () {
            return circle.remove();
          }, 500);
        },
      },
    ]);
    return Ripple;
  })();
  (function setRipple() {
    var ripple = new Ripple();
    var lightRipple = document.querySelectorAll('[data-ripple-light="true"]');
    var darkRipple = document.querySelectorAll('[data-ripple-dark="true"]');
    if (lightRipple) {
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (
          var _iterator = lightRipple[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var element = _step.value;
          element.addEventListener("mouseup", function (event) {
            ripple.create(event, "light");
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    if (darkRipple) {
      var _iteratorNormalCompletion1 = true,
        _didIteratorError1 = false,
        _iteratorError1 = undefined;
      try {
        for (
          var _iterator1 = darkRipple[Symbol.iterator](), _step1;
          !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
          _iteratorNormalCompletion1 = true
        ) {
          var element1 = _step1.value;
          element1.addEventListener("mouseup", function (event) {
            ripple.create(event, "dark");
          });
        }
      } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
            _iterator1.return();
          }
        } finally {
          if (_didIteratorError1) {
            throw _iteratorError1;
          }
        }
      }
    }
  })();
}
