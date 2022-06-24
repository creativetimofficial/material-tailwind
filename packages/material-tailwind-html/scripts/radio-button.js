(function () {
  let radios = document.querySelectorAll('[type="radio"]');

  radios.forEach((radio) =>
    radio.addEventListener("click", function () {
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].hasAttribute("checked")) {
          radios[i].removeAttribute("checked");
        }
      }

      radio.setAttribute("checked", "true");
    })
  );
})();
