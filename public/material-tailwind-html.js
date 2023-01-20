import flatpickr from "flatpickr";
import noUiSlider from "nouislider";
// import Choices from "choices.js";
// import ApexCharts from 'apexcharts';

export default function init() {
 

  ("use strict");
  (function () {
    var slider = document.getElementById("sliderRegular");

    if (slider) {
      if (slider.noUiSlider) {
        slider.noUiSlider.destroy();
      }

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100,
        },
      });
    }
  })();

  ("use strict");
  (function () {
    var triggers = document.querySelectorAll("[data-notification]");
    triggers.forEach((trigger) => {
      let notificationId = trigger.getAttribute("data-target");

      trigger.addEventListener("click", function () {
        let notification = document.querySelector("#" + notificationId);

        if (trigger.getAttribute("aria-hidden") == "true") {
          trigger.setAttribute("aria-hidden", "false");
          notification.classList.add("show");

          setTimeout(function () {
            trigger.setAttribute("aria-hidden", "true");
            notification.classList.remove("show");
          }, 3800);
        }
      });
    });
  })();

  ("use strict");
  (function () {
    if (document.querySelector(".datepicker")) {
      flatpickr(".datepicker", {});
    }
  })();

  ("use strict");
  (function () {
    if (document.querySelector(".timepicker")) {
      flatpickr(".timepicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
      });
    }
  })();

  // ("use strict");
  // (function () {
  //   const slides = document.querySelectorAll(".slide");

  //   slides.forEach((slide, indx) => {
  //     slide.style.transform = `translateX(${indx * 100}%)`;
  //   });

  //   const nextSlide = document.querySelector(".button-next");
  //   let curSlide = 0;
  //   let maxSlide = slides.length - 1;

  //   nextSlide.addEventListener("click", function () {
  //     if (curSlide === maxSlide) {
  //       curSlide = 0;
  //     } else {
  //       curSlide++;
  //     }

  //     slides.forEach((slide, indx) => {
  //       slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  //     });
  //   });

  //   const prevSlide = document.querySelector(".button-prev");
  //   prevSlide.addEventListener("click", function () {
  //     if (curSlide === 0) {
  //       curSlide = maxSlide;
  //     } else {
  //       curSlide--;
  //     }

  //     slides.forEach((slide, indx) => {
  //       slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  //     });
  //   });
  // })();

  ("use strict");
  (function () {
    let alert_dismiss = document.querySelectorAll("[alert-dismiss]");

    alert_dismiss.forEach((dismiss) =>
      dismiss.addEventListener("click", function () {
        dismiss.parentElement.parentElement.classList.add("hidden");
      })
    );
  })();

  ("use strict");
  (function () {
    if (document.querySelector("[data-collapse]")) {
      var accordion = document.querySelector("[data-collapse]");

      var sections = accordion.querySelectorAll("[data-collapse-section]");

      sections.forEach((section) => {
        let trigger = section.querySelector("[data-collapse-trigger]");

        trigger.addEventListener("click", function () {
          if (this.getAttribute("aria-expanded") == "true") {
            this.setAttribute("aria-expanded", "false");
          } else {
            let accordion = this.closest("[data-collapse]");
            let triggers = accordion.querySelectorAll(
              "[data-collapse-trigger]"
            );
            triggers.forEach((trigger) => {
              trigger.setAttribute("aria-expanded", "false");
            });
            this.setAttribute("aria-expanded", "true");
          }
          init(sections);
        });
      });

      //initialization max height
      init(sections);

      function init(sections) {
        sections.forEach((section) => {
          let content = section.querySelector("[data-collapse-content]");
          let trigger = section.querySelector("[data-collapse-trigger]");
          if (trigger.getAttribute("aria-expanded") == "true") {
            if (trigger.querySelector("[section-close-icon]")) {
              let close_icon = trigger.querySelector("[section-close-icon]");
              close_icon.classList.remove("hidden");
            }
            if (trigger.querySelector("[section-open-icon]")) {
              let open_icon = trigger.querySelector("[section-open-icon]");
              open_icon.classList.add("hidden");
            }
            trigger.classList.remove("text-slate-500");
            trigger.classList.add("text-slate-700");
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            if (trigger.querySelector("[section-open-icon]")) {
              let open_icon = trigger.querySelector("[section-open-icon]");
              open_icon.classList.remove("hidden");
            }
            if (trigger.querySelector("[section-close-icon]")) {
              let close_icon = trigger.querySelector("[section-close-icon]");
              close_icon.classList.add("hidden");
            }
            trigger.classList.remove("text-slate-700");
            trigger.classList.add("text-slate-500");
            content.style.maxHeight = "0px";
          }
        });
      }
    }

    if (document.querySelector("[navbar-trigger]")) {
      var expand_trigger = document.querySelector("[navbar-trigger]");
      var bar1 = document.querySelector("[bar1]");
      var bar2 = document.querySelector("[bar2]");
      var bar3 = document.querySelector("[bar3]");
      expand_trigger.addEventListener("click", function () {
        var navbar_collapse = document.querySelector(".navbar-collapse");
        navbar_collapse.classList.toggle("open");
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("origin-[10%_10%]");
        bar1.classList.toggle("mt-1");
        bar2.classList.toggle("opacity-0");
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("origin-[10%_90%]");
        bar3.classList.toggle("mt-[0.1875rem]");
        bar3.classList.toggle("mt-[0.4375rem]");
      });
    }
  })();
  ("use strict");
  (function () {
    if (document.querySelectorAll("[blur-shadow-image]")) {
      var shadowCards = document.querySelectorAll("[blur-shadow-image]");
      var shadowCardsRounded = document.querySelectorAll(
        "[blur-shadow-image][rounded]"
      );
      if (shadowCardsRounded) {
        for (var i = 0; i < shadowCardsRounded.length; i++) {
          var div = document.createElement("DIV");
          shadowCardsRounded[i].parentElement.appendChild(div);
          div.classList.add("colored-shadow", "rounded-full");
          var currentSrc =
            shadowCardsRounded[i].children[0].getAttribute("src");
          var el = shadowCardsRounded[i].nextElementSibling;
          el.style.backgroundImage = "url(" + currentSrc + ")";
        }
      }
      if (shadowCards) {
        for (var i1 = 0; i1 < shadowCards.length; i1++) {
          var div1 = document.createElement("DIV");
          shadowCards[i1].parentElement.appendChild(div1);
          div1.classList.add("colored-shadow");
          var currentSrc1 = shadowCards[i1].children[0].getAttribute("src");
          var el1 = shadowCards[i1].nextElementSibling;
          el1.style.backgroundImage = "url(" + currentSrc1 + ")";
        }
      }
    }
    if (document.querySelector("[blur-shadow-avatar]")) {
      var shadowCards1 = document.querySelectorAll("[blur-shadow-avatar]");
      var shadowCardsRounded1 = document.querySelectorAll(
        "[blur-shadow-avatar-rounded]"
      );
      if (shadowCardsRounded1) {
        for (var i2 = 0; i2 < shadowCardsRounded1.length; i2++) {
          var div2 = document.createElement("DIV");
          shadowCardsRounded1[i2].append(div2);
          div2.classList.add(
            "colored-shadow",
            "rounded-full",
            "start-0",
            "end-0",
            "mx-auto"
          );
          var avatarClasses = [
            "avatar-xs",
            "avatar-sm",
            "avatar-lg",
            "avatar-xl",
            "avatar-xxl",
          ];
          for (var k = 0; k < avatarClasses.length; k++) {
            if (
              shadowCardsRounded1[i2].firstElementChild.classList.contains(
                avatarClasses[k]
              )
            ) {
              div2.classList.add(avatarClasses[k]);
            }
          }
          var currentSrc2 =
            shadowCardsRounded1[i2].children[0].getAttribute("src");
          div2.style.backgroundImage = "url(" + currentSrc2 + ")";
        }
      }
      if (shadowCards1) {
        for (var i3 = 0; i3 < shadowCards1.length; i3++) {
          var div3 = document.createElement("DIV");
          shadowCards1[i3].append(div3);
          div3.classList.add("colored-shadow", "start-0", "end-0", "mx-auto");
          var avatarClasses1 = [
            "avatar-xs",
            "avatar-sm",
            "avatar-lg",
            "avatar-xl",
            "avatar-xxl",
          ];
          for (var k1 = 0; k1 < avatarClasses1.length; k1++) {
            if (
              shadowCards1[i3].firstElementChild.classList.contains(
                avatarClasses1[k1]
              )
            ) {
              div3.classList.add(avatarClasses1[k1]);
            }
          }
          var currentSrc3 = shadowCards1[i3].children[0].getAttribute("src");
          div3.style.backgroundImage = "url(" + currentSrc3 + ")";
        }
      }
    }
  })();
  ("use strict");
  (function () {
    var dialogTrigger = document.querySelectorAll("[dialog-trigger]");
    for (var i = 0; i < dialogTrigger.length; i++) {
      dialogTrigger[i].onclick = function () {
        var dialogWindow = this.nextElementSibling;
        dialogWindow.classList
          ? dialogWindow.classList.add("open")
          : (dialogWindow.className += " " + "open");
      };
    }
    var closeButton = document.querySelectorAll("[dialog-close]");
    for (var i1 = 0; i1 < closeButton.length; i1++) {
      closeButton[i1].onclick = function () {
        var dialogWindow = this.closest(".dialog");
        dialogWindow.classList
          ? dialogWindow.classList.remove("open")
          : (dialogWindow.className = dialogWindow.className.replace(
              new RegExp(
                "(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)",
                "gi"
              ),
              " "
            ));
      };
    }
  })();
  ("use strict");
  (function () {
    var input_group = document.querySelectorAll(".form-control");
    input_group.forEach(function (el) {
      return el.addEventListener("focus", function () {
        el.parentElement.classList.add("focused");
      });
    });
    var input_group_focused = document.querySelectorAll(".form-control");
    input_group_focused.forEach(function (el) {
      return el.addEventListener("focusout", function () {
        el.parentElement.classList.remove("focused");
      });
    });
    var inputs = document.querySelectorAll("input");
    var textareas = document.querySelectorAll("textarea");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("value")) {
        inputs[i].parentElement.classList.add("is-filled");
      }
      inputs[i].addEventListener(
        "focus",
        function (e) {
          this.parentElement.classList.add("is-focused");
        },
        false
      );
      inputs[i].onkeyup = function (e) {
        if (this.value != "") {
          this.parentElement.classList.add("is-filled");
        } else {
          this.parentElement.classList.remove("is-filled");
        }
      };
      inputs[i].addEventListener(
        "focusout",
        function (e) {
          if (this.value != "") {
            this.parentElement.classList.add("is-filled");
          }
          this.parentElement.classList.remove("is-focused");
        },
        false
      );
    }
    for (var i1 = 0; i1 < textareas.length; i1++) {
      if (textareas[i1].hasAttribute("value")) {
        textareas[i1].parentElement.classList.add("is-filled");
      }
      textareas[i1].addEventListener(
        "focus",
        function (e) {
          this.parentElement.classList.add("is-focused");
        },
        false
      );
      textareas[i1].onkeyup = function (e) {
        if (this.value != "") {
          this.parentElement.classList.add("is-filled");
        } else {
          this.parentElement.classList.remove("is-filled");
        }
      };
      textareas[i1].addEventListener(
        "focusout",
        function (e) {
          if (this.value != "") {
            this.parentElement.classList.add("is-filled");
          }
          this.parentElement.classList.remove("is-focused");
        },
        false
      );
    }
  })();
  ("use strict");
  (function () {
    var _loop = function (i) {
      dropdown_trigger[i].addEventListener("click", function () {
        this.parentElement.classList.toggle("open");
        var dropdown_menu = document.querySelectorAll(
          ".menu-item + .dropdown-menu"
        );
        for (var i = 0; i < dropdown_menu.length; i++) {
          var menu_item = dropdown_menu[i].previousElementSibling;
          menu_item.addEventListener("click", nestedMenuClickHandler);
        }
      });
      var dropdown = dropdown_trigger[i].nextElementSibling;
      var close = function () {
        dropdown.parentElement.classList.remove("open");
      };
      window.addEventListener("click", function (e) {
        if (dropdown.parentElement.classList.contains("open")) {
          if (
            !dropdown.contains(e.target) &&
            !dropdown.previousElementSibling.contains(e.target)
          ) {
            close();
          }
        }
      });
    };
    var nestedMenuClickHandler = function nestedMenuClickHandler() {
      this.nextElementSibling.classList.toggle("open");
    };
    var dropdown_trigger = document.querySelectorAll("[menu-trigger]");
    for (var i = 0; i < dropdown_trigger.length; i++) _loop(i);
  })();
  ("use strict");
  (function () {
    if (document.querySelector('[data-target="popover"]')) {
      var openPopover = function openPopover(event) {
        var element = event.target;
        var popover = element.nextElementSibling;
        var placement = popover.getAttribute("data-placement");
        element = Popper.createPopper(element, popover, {
          placement: placement,
        });
        popover.classList.toggle("hidden");
      };
      var triggers = document.querySelectorAll('[data-target="popover"]');
      triggers.forEach(function (trigger) {
        trigger.addEventListener("click", openPopover);
      });
    }
  })();
  ("use strict");
  (function () {
    if (document.querySelectorAll(".progress-bar")) {
      var link = document.querySelectorAll(".progress-bar");
      for (var i = 0; i < link.length; i++) {
        var value = link[i].getAttribute("data-value");
        link[i].setAttribute("style", "width:" + value + "%;");
      }
    }
  })();
  ("use strict");
  (function () {
    if (typeof window !== undefined) {
      if (document.getElementById("choice-button")) {
        var element = document.getElementById("choice-button");
        var example = new Choices(element, { searchEnabled: false });
      }
      if (document.getElementById("choice-search")) {
        var element = document.getElementById("choice-search");
        var example1 = new Choices(element, {});
      }
      // if (document.getElementById("multi-select")) {
      //   var element = document.getElementById("multi-select");
      //   var example2 = new Choices(element, { searchEnabled: false });
      // }
    }
  })();
  ("use strict");
  (function () {
    var total = document.querySelectorAll("[data-tabs]");

    var getEventTarget = function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
    };

    total.forEach(function (item, i) {
      var moving_div = document.createElement("div");
      var first_li = item.querySelector("li:first-child [data-tab-target]");
      var tab = first_li.cloneNode();
      tab.innerHTML = "-";
      tab.classList.remove("bg-inherit", "text-slate-700");
      tab.classList.add("bg-white", "text-white");
      tab.style.animation = ".2s ease";

      moving_div.classList.add(
        "z-10",
        "absolute",
        "text-slate-700",
        "rounded-lg",
        "bg-inherit",
        "flex-auto",
        "text-center",
        "bg-none",
        "border-0",
        "block",
        "shadow"
      );
      moving_div.setAttribute("moving-tab", "");
      moving_div.setAttribute("data-tab-target", "");
      moving_div.appendChild(tab);
      item.appendChild(moving_div);

      var list_length = item.getElementsByTagName("li").length;

      moving_div.style.padding = "0px";
      moving_div.style.width =
        item.querySelector("li:nth-child(1)").offsetWidth + "px";
      moving_div.style.transform = "translate3d(0px, 0px, 0px)";
      moving_div.style.transition = ".5s ease";

      item.onmouseover = function (event) {
        let target = getEventTarget(event);
        let li = target.closest("li");
        if (li) {
          let nodes = Array.from(li.closest("ul").children);
          let index = nodes.indexOf(li) + 1;
          item.querySelector(
            "li:nth-child(" + index + ") [data-tab-target]"
          ).onclick = function () {
            item.querySelectorAll("li").forEach(function (list_item) {
              list_item.firstElementChild.removeAttribute("active");
              list_item.firstElementChild.setAttribute(
                "aria-selected",
                "false"
              );
            });
            li.firstElementChild.setAttribute("active", "");
            li.firstElementChild.setAttribute("aria-selected", "true");
            moving_div = item.querySelector("[moving-tab]");
            let sum = 0;
            if (item.classList.contains("flex-col")) {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector(
                  "li:nth-child(" + j + ")"
                ).offsetHeight;
              }
              moving_div.style.transform =
                "translate3d(0px," + sum + "px, 0px)";
              moving_div.style.height = item.querySelector(
                "li:nth-child(" + j + ")"
              ).offsetHeight;
            } else {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector(
                  "li:nth-child(" + j + ")"
                ).offsetWidth;
              }
              moving_div.style.transform =
                "translate3d(" + sum + "px, 0px, 0px)";
              moving_div.style.width =
                item.querySelector("li:nth-child(" + index + ")").offsetWidth +
                "px";
            }
          };
        }
      };
    });

    window.addEventListener("resize", function (event) {
      total.forEach(function (item, i) {
        item = item.parentElement.firstElementChild;

        item.querySelector("[moving-tab]").remove();
        var moving_div = document.createElement("div");
        var tab = item.querySelector("[data-tab-target][aria-selected='true']").cloneNode();
        tab.innerHTML = "-";
        tab.classList.remove("bg-inherit");
        tab.classList.add("bg-white", "text-white");
        tab.style.animation = ".2s ease";

        moving_div.classList.add(
          "z-10",
          "absolute",
          "text-slate-700",
          "rounded-lg",
          "bg-inherit",
          "flex-auto",
          "text-center",
          "bg-none",
          "border-0",
          "block",
          "shadow"
        );
        moving_div.setAttribute("moving-tab", "");
        moving_div.setAttribute("data-tab-target", "");
        moving_div.appendChild(tab);

        item.appendChild(moving_div);

        moving_div.style.padding = "0px";
        moving_div.style.transition = ".5s ease";

        let li = item.querySelector("[data-tab-target][aria-selected='true']").parentElement;

        if (li) {
          let nodes = Array.from(li.closest("ul").children);
          let index = nodes.indexOf(li) + 1;

          let sum = 0;
          if (item.classList.contains("flex-col")) {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
            }
            moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
            moving_div.style.width =
              item.querySelector("li:nth-child(" + index + ")").offsetWidth +
              "px";
            moving_div.style.height = item.querySelector(
              "li:nth-child(" + j + ")"
            ).offsetHeight;
          } else {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
            }
            moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
            moving_div.style.width =
              item.querySelector("li:nth-child(" + index + ")").offsetWidth +
              "px";
          }
        }
      });
      if (window.innerWidth < 991) {
        total.forEach(function (item, i) {
          if (!item.classList.contains("flex-col")) {
            item.classList.add("flex-col", "on-resize");
          }
        });
      } else {
        total.forEach(function (item, i) {
          if (item.classList.contains("on-resize")) {
            item.classList.remove("flex-col", "on-resize");
          }
        });
      }
    });
    var total = document.querySelectorAll("[data-tab-content]");
    if (total[0]) {
      total.forEach(function (nav_pills) {
        var links = nav_pills.parentElement.querySelectorAll(
          "li a[data-tab-target]"
        );
        links.forEach(function (link) {
          link.addEventListener("click", function () {
            var clicked_tab = document.querySelector(
              "#" + link.getAttribute("aria-controls")
            );

            if (!clicked_tab.classList.contains("block", "opacity-100")) {
              var active_link = clicked_tab
                .closest("[data-tab-content]")
                .parentElement.querySelector(
                  "li a[data-tab-target][aria-selected='true']"
                );

              var active_panel = document.querySelector(
                "#" + active_link.getAttribute("aria-controls")
              );

              active_panel.classList.remove("block", "opacity-100");
              active_panel.classList.add("hidden", "opacity-0");
              clicked_tab.classList.add("block", "opacity-100");
              clicked_tab.classList.remove("hidden", "opacity-0");
            }
          });
        });
      });
    }
  })();

  ("use strict");
  (function () {
    var toggles = document.querySelectorAll('[data-attribute="toggle"]');
    toggles.forEach(function (trigger) {
      return trigger.addEventListener("click", function () {
        trigger.nextElementSibling.toggleAttribute("checked");
      });
    });
  })();
  ("use strict");
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
      iter["@@iterator"] != null
    )
      return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(
          Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          })
        );
      }
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
    return target;
  }
  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  (function () {
    if (document.querySelectorAll('[data-target="tooltip"]')) {
      var buttons = document.querySelectorAll('[data-target="tooltip"]');
      buttons.forEach(function (button) {
        var show = function show() {
          tooltip.setAttribute("data-show", "");
          popperInstance.setOptions(function (options) {
            return _objectSpreadProps(_objectSpread({}, options), {
              modifiers: _toConsumableArray(options.modifiers).concat([
                { name: "eventListeners", enabled: true },
              ]),
            });
          });
          popperInstance.update();
        };
        var hide = function hide() {
          tooltip.removeAttribute("data-show");
          popperInstance.setOptions(function (options) {
            return _objectSpreadProps(_objectSpread({}, options), {
              modifiers: _toConsumableArray(options.modifiers).concat([
                { name: "eventListeners", enabled: false },
              ]),
            });
          });
        };
        var tooltip = button.nextElementSibling;
        var placement = tooltip.getAttribute("data-placement");
        var popperInstance = Popper.createPopper(button, tooltip, {
          modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
          placement: placement,
        });
        var showEvents = ["mouseenter", "focus"];
        var hideEvents = ["mouseleave", "blur"];
        showEvents.forEach(function (event) {
          button.addEventListener(event, show);
        });
        hideEvents.forEach(function (event) {
          button.addEventListener(event, hide);
        });
      });
    }
  })();

  // (function() {
  //   var options = {
  //     chart: {
  //       height: 280,
  //       type: "area"
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     series: [
  //       {
  //         name: "Series 1",
  //         data: [45, 52, 38, 45, 19, 23, 2]
  //       }
  //     ],
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shadeIntensity: 1,
  //         opacityFrom: 0.7,
  //         opacityTo: 0.9,
  //         stops: [0, 90, 100]
  //       }
  //     },
  //     xaxis: {
  //       categories: [
  //         "01 Jan",
  //         "02 Jan",
  //         "03 Jan",
  //         "04 Jan",
  //         "05 Jan",
  //         "06 Jan",
  //         "07 Jan"
  //       ]
  //     }
  //   };

  //   var chart = new ApexCharts(document.querySelector("#chart"), options);

  //   chart.render();

  //   var options1 = {
  //     chart: {
  //       height: 280,
  //       type: "radialBar",
  //     },
  //     series: [67, 84, 97],
  //     labels: ['TEAM A', 'TEAM B', 'TEAM C']
  //   };

  //   new ApexCharts(document.querySelector("#chart2"), options1).render();
  // })();
}
