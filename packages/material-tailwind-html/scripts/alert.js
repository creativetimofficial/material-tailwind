(function () {
  let alert_dismiss = document.querySelectorAll("[alert-dismiss]");

  alert_dismiss.forEach((dismiss) =>
    dismiss.addEventListener("click", function () {
      dismiss.parentElement.classList.add("hide");
    })
  );
})();
