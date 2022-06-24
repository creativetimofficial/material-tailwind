(function () {
  if (document.querySelector('[data-target="popover"]')) {
    let triggers = document.querySelectorAll('[data-target="popover"]');

    function openPopover(event) {
      let element = event.target;
      let popover = element.nextElementSibling;

      let placement = popover.getAttribute("data-placement");
      element = Popper.createPopper(element, popover, {
        placement: placement,
      });
      popover.classList.toggle("hidden");
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", openPopover);
    });
  }
})();
