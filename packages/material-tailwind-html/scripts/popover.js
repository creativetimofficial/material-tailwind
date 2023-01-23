import {
  computePosition,
  flip,
  inline,
  offset,
  shift,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@latest/+esm";

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

          function mountPopover() {
            setPosition();
            popover.classList.remove(...unmountClasses);
            popover.classList.add(...mountClasses);
          }

          function unmountPopover() {
            setPosition();
            popover.classList.remove(...mountClasses);
            popover.classList.add(...unmountClasses);
          }

          function closeAll() {
            Array.from(popovers).forEach(el => el.className.includes(mountValue)
              ? unmountPopover()
              : null)
          }

          trigger.addEventListener("click", ({ target }) => {
            if (popover.className.includes(unmountValue)) {
              mountPopover()
            } else {
              Array.from(popovers).forEach(el => {
                if (el.className.includes(mountValue) && target?.dataset?.popoverNested) {
                  el.classList.remove(...mountClasses);
                  el.classList.add(...unmountClasses);
                }
              })

              unmountPopover()
            }
          });

          document.addEventListener("click", ({ target }) => {
            if (
              !target?.dataset?.popover &&
              !target.offsetParent?.dataset?.popover &&
              !target?.dataset.popoverTarget &&
              !target.offsetParent?.dataset?.popoverTarget
            ) closeAll()
          })

          document.addEventListener("keyup", ({ key }) => key === "Escape" ? closeAll() : null)
        }
      })
    );
  }
})();
