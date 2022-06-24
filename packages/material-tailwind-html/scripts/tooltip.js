(function () {
  if (document.querySelectorAll('[data-target="tooltip"]')) {
    let buttons = document.querySelectorAll('[data-target="tooltip"]');

    buttons.forEach((button) => {
      let tooltip = button.nextElementSibling;
      let placement = tooltip.getAttribute("data-placement");

      let popperInstance = Popper.createPopper(button, tooltip, {
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ],
        placement: placement,
      });

      function show() {
        tooltip.setAttribute("data-show", "");

        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: "eventListeners", enabled: true },
          ],
        }));

        popperInstance.update();
      }

      function hide() {
        tooltip.removeAttribute("data-show");
        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: "eventListeners", enabled: false },
          ],
        }));
      }

      let showEvents = ["mouseenter", "focus"];
      let hideEvents = ["mouseleave", "blur"];

      showEvents.forEach((event) => {
        button.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        button.addEventListener(event, hide);
      });
    });
  }
})();
