(function () {
  let dialogTrigger = document.querySelectorAll("[dialog-trigger]");
  for (let i = 0; i < dialogTrigger.length; i++) {
    dialogTrigger[i].onclick = function () {
      let dialogWindow = this.nextElementSibling;
      dialogWindow.classList
        ? dialogWindow.classList.add("open")
        : (dialogWindow.className += " " + "open");
    };
  }

  let closeButton = document.querySelectorAll("[dialog-close]");
  for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
      let dialogWindow = this.closest(".dialog");
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
