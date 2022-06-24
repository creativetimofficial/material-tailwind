(function () {
  let toggles = document.querySelectorAll('[data-attribute="toggle"]');
  toggles.forEach((trigger) =>
    trigger.addEventListener("click", function () {
      trigger.nextElementSibling.toggleAttribute("checked");
    })
  );
})();
