(function () {
  const dismissible = document.querySelectorAll("[data-dismissible]");
  const targets = document.querySelectorAll("[data-dismissible-target]");

  if (dismissible && targets) {
    dismissible.forEach((dismiss) =>
      targets.forEach((target) => {
        if (dismiss.dataset.dismissible === target.dataset.dismissibleTarget) {
          target.addEventListener("click", function () {
            dismiss.classList.toggle("hidden");
          });
        }
      })
    );
  }
})();
