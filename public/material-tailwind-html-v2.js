import { computePosition, flip, inline, offset, shift } from "@floating-ui/dom";

export default function initHtmlScripts() {
  // ripple effect
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
          offsetY,
        ) {
          this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
          this.y =
            clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
          this.z = Math.hypot(
            this.x - (clickPointX - offsetX),
            this.y - (clickPointY - offsetY),
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
            { duration: 500, easing: "linear" },
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
            rect.top,
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

  (function () {
    const triggers = document.querySelectorAll("[data-popover-target]");
    const popovers = document.querySelectorAll("[data-popover]");

    if (triggers && popovers) {
      Array.from(triggers).forEach((trigger) =>
        Array.from(popovers).forEach((popover) => {
          if (trigger.dataset.popoverTarget === popover.dataset.popover) {
            const placement = popover.dataset.popoverPlacement || "top";
            const offsetValue = popover.dataset.popoverOffset || 5;
            const mountValue = popover.dataset.popoverMount || "opacity-1";
            const unmountValue =
              popover.dataset.popoverUnmount || "pointer-events-none opacity-0";
            const transitionValue =
              popover.dataset.popoverTransition ||
              "transition-opacity duration-300";
            const mountClasses = mountValue.split(" ");
            const unmountClasses = unmountValue.split(" ");
            const transitionClasses = transitionValue.split(" ");

            popover.classList.add(...unmountClasses);

            if (!popover.hasAttribute("tabindex"))
              popover.setAttribute("tabindex", 0);
            if (transitionValue !== "false")
              popover.classList.add(...transitionClasses);

            function setPosition() {
              computePosition(trigger, popover, {
                placement,
                middleware: [
                  flip(),
                  inline(),
                  shift(),
                  offset(Number(offsetValue)),
                ],
              }).then(({ x, y }) => {
                Object.assign(popover.style, {
                  top: `${y}px`,
                  left: `${x}px`,
                });
              });
            }

            function mountSelect() {
              setPosition();
              popover.classList.remove(...unmountClasses);
              popover.classList.add(...mountClasses);
            }

            function unmountSelect() {
              setPosition();
              popover.classList.remove(...mountClasses);
              popover.classList.add(...unmountClasses);
            }

            function closeAll() {
              Array.from(popovers).forEach((el) =>
                el.className.includes(mountValue) ? unmountSelect() : null,
              );
            }

            trigger.addEventListener("click", ({ target }) => {
              if (popover.className.includes(unmountValue)) {
                mountSelect();
              } else {
                Array.from(popovers).forEach((el) => {
                  if (
                    el.className.includes(mountValue) &&
                    target?.dataset?.popoverNested
                  ) {
                    el.classList.remove(...mountClasses);
                    el.classList.add(...unmountClasses);
                  }
                });

                unmountSelect();
              }
            });

            document.addEventListener("click", ({ target }) => {
              if (
                !target?.dataset?.popover &&
                !target.offsetParent?.dataset?.popover &&
                !target?.dataset.popoverTarget &&
                !target.offsetParent?.dataset?.popoverTarget
              )
                closeAll();
            });

            document.addEventListener("keyup", ({ key }) =>
              key === "Escape" ? closeAll() : null,
            );
          }
        }),
      );
    }
  })();

  // tooltip
  (function () {
    const triggers = document.querySelectorAll("[data-tooltip-target]");
    const tooltips = document.querySelectorAll("[data-tooltip]");

    if (triggers && tooltips) {
      Array.from(triggers).forEach((trigger) =>
        Array.from(tooltips).forEach((tooltip) => {
          if (trigger.dataset.tooltipTarget === tooltip.dataset.tooltip) {
            const placement = tooltip.dataset.tooltipPlacement || "top";
            const offsetValue = tooltip.dataset.tooltipOffset || 5;
            const mountValue = tooltip.dataset.tooltipMount || "opacity-1";
            const unmountValue =
              tooltip.dataset.tooltipUnmount || "pointer-events-none opacity-0";
            const transitionValue =
              tooltip.dataset.tooltipTransition ||
              "transition-opacity duration-300";
            const mountClasses = mountValue.split(" ");
            const unmountClasses = unmountValue.split(" ");
            const transitionClasses = transitionValue.split(" ");

            tooltip.classList.add(...unmountClasses);

            if (!tooltip.hasAttribute("tabindex"))
              tooltip.setAttribute("tabindex", 0);
            if (transitionValue !== "false")
              tooltip.classList.add(...transitionClasses);

            function setPosition() {
              computePosition(trigger, tooltip, {
                placement,
                middleware: [
                  flip(),
                  inline(),
                  shift(),
                  offset(Number(offsetValue)),
                ],
              }).then(({ x, y }) => {
                Object.assign(tooltip.style, {
                  top: `${y}px`,
                  left: `${x}px`,
                });
              });
            }

            function mountTooltip() {
              setPosition();
              tooltip.classList.remove(...unmountClasses);
              tooltip.classList.add(...mountClasses);
            }

            function unmountTooltip() {
              setPosition();
              tooltip.classList.remove(...mountClasses);
              tooltip.classList.add(...unmountClasses);
            }

            [
              ["mouseenter", mountTooltip],
              ["mouseleave", unmountTooltip],
              ["focus", mountTooltip],
              ["blur", unmountTooltip],
            ].forEach(([event, listener]) => {
              trigger.addEventListener(event, listener);
            });
          }
        }),
      );
    }
  })();

  // dialog
  (function () {
    const triggers = document.querySelectorAll("[data-dialog-target]");
    const dialogs = document.querySelectorAll("[data-dialog]");
    const backdrops = document.querySelectorAll("[data-dialog-backdrop]");
    const closeTriggers = document.querySelectorAll("[data-dialog-close]");

    if (triggers && dialogs && backdrops) {
      Array.from(triggers).forEach((trigger) =>
        Array.from(dialogs).forEach((dialog) =>
          Array.from(backdrops).forEach((backdrop) => {
            if (
              trigger.dataset.dialogTarget === dialog.dataset.dialog &&
              backdrop.dataset.dialogBackdrop === dialog.dataset.dialog
            ) {
              const mountValue =
                dialog.dataset.dialogMount || "opacity-1 translate-y-0";
              const unmountValue =
                dialog.dataset.dialogUnmount || "opacity-0 -translate-y-14";
              const transitionValue =
                dialog.dataset.dialogTransition ||
                "transition-all duration-300";
              const mountClasses = mountValue.split(" ");
              const unmountClasses = unmountValue.split(" ");
              const transitionClasses = transitionValue.split(" ");
              let isDialogOpen = false;

              dialog.classList.add(...unmountClasses);

              if (!backdrop.hasAttribute("tabindex"))
                backdrop.setAttribute("tabindex", 0);
              if (transitionValue !== "false")
                dialog.classList.add(...transitionClasses);

              if (
                dialog.className.includes(unmountValue) &&
                !backdrop.className.includes("pointer-events-none opacity-0")
              ) {
                backdrop.classList.add("pointer-events-none");
                backdrop.classList.add("opacity-0");
              }

              function mountDialog() {
                isDialogOpen = true;
                backdrop.classList.toggle("pointer-events-none");
                backdrop.classList.toggle("opacity-0");
                dialog.classList.remove(...unmountClasses);
                dialog.classList.add(...mountClasses);
              }

              function unmountDialog() {
                isDialogOpen = false;
                backdrop.classList.toggle("pointer-events-none");
                backdrop.classList.toggle("opacity-0");
                dialog.classList.remove(...mountClasses);
                dialog.classList.add(...unmountClasses);
              }

              trigger.addEventListener("click", () =>
                dialog.className.includes(unmountValue)
                  ? mountDialog()
                  : unmountDialog(),
              );

              backdrop.addEventListener("click", ({ target }) => {
                if (
                  target?.dataset?.dialogBackdrop &&
                  target?.dataset?.dialogBackdropClose
                )
                  unmountDialog();
              });

              document.addEventListener("keyup", ({ key }) =>
                key === "Escape" && isDialogOpen ? unmountDialog() : null,
              );

              Array.from(closeTriggers).forEach((close) =>
                close.addEventListener("click", () =>
                  isDialogOpen ? unmountDialog() : null,
                ),
              );
            }
          }),
        ),
      );
    }
  })();

  // dismissible
  (function () {
    const dismissible = document.querySelectorAll("[data-dismissible]");
    const targets = document.querySelectorAll("[data-dismissible-target]");

    if (dismissible && targets) {
      dismissible.forEach((dismiss) =>
        targets.forEach((target) => {
          if (
            dismiss.dataset.dismissible === target.dataset.dismissibleTarget
          ) {
            target.addEventListener("click", () => {
              dismiss.classList.toggle("hidden");
            });
          }
        }),
      );
    }
  })();

  // collapse
  (function () {
    const triggers = document.querySelectorAll("[data-collapse-target]");
    const collapses = document.querySelectorAll("[data-collapse]");

    if (triggers && collapses) {
      Array.from(triggers).forEach((trigger) =>
        Array.from(collapses).forEach((collapse) => {
          if (trigger.dataset.collapseTarget === collapse.dataset.collapse) {
            trigger.addEventListener("click", () => {
              if (collapse.style.height && collapse.style.height !== "0px") {
                collapse.style.height = 0;
                collapse.style.overflow = "hidden";
                trigger.removeAttribute("open");
              } else {
                collapse.style.height = `${collapse.firstChild.clientHeight}px`;
                collapse.style.overflow = "visible";
                trigger.setAttribute("open", "");
              }
            });
          }
        }),
      );
    }
  })();

  // tabs
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
        "shadow",
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
            "li:nth-child(" + index + ") [data-tab-target]",
          ).onclick = function () {
            item.querySelectorAll("li").forEach(function (list_item) {
              list_item.firstElementChild.removeAttribute("active");
              list_item.firstElementChild.setAttribute(
                "aria-selected",
                "false",
              );
            });
            li.firstElementChild.setAttribute("active", "");
            li.firstElementChild.setAttribute("aria-selected", "true");
            moving_div = item.querySelector("[moving-tab]");
            let sum = 0;
            if (item.classList.contains("flex-col")) {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector(
                  "li:nth-child(" + j + ")",
                ).offsetHeight;
              }
              moving_div.style.transform =
                "translate3d(0px," + sum + "px, 0px)";
              moving_div.style.height = item.querySelector(
                "li:nth-child(" + j + ")",
              ).offsetHeight;
            } else {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector(
                  "li:nth-child(" + j + ")",
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
        var tab = item
          .querySelector("[data-tab-target][aria-selected='true']")
          .cloneNode();
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
          "shadow",
        );
        moving_div.setAttribute("moving-tab", "");
        moving_div.setAttribute("data-tab-target", "");
        moving_div.appendChild(tab);

        item.appendChild(moving_div);

        moving_div.style.padding = "0px";
        moving_div.style.transition = ".5s ease";

        let li = item.querySelector(
          "[data-tab-target][aria-selected='true']",
        ).parentElement;

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
              "li:nth-child(" + j + ")",
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
          "li a[data-tab-target]",
        );
        links.forEach(function (link) {
          link.addEventListener("click", function () {
            var clicked_tab = document.querySelector(
              "#" + link.getAttribute("aria-controls"),
            );

            if (!clicked_tab.classList.contains("block", "opacity-100")) {
              var active_link = clicked_tab
                .closest("[data-tab-content]")
                .parentElement.querySelector(
                  "li a[data-tab-target][aria-selected='true']",
                );

              var active_panel = document.querySelector(
                "#" + active_link.getAttribute("aria-controls"),
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
}
