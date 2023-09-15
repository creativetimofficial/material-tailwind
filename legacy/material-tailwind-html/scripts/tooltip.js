import {
  computePosition,
  flip,
  inline,
  offset,
  shift,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@latest/+esm";

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
      })
    );
  }
})();
