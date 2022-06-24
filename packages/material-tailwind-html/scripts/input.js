(function () {
  // when input is focused add focused class for style
  let input_group = document.querySelectorAll(".form-control");
  input_group.forEach((el) =>
    el.addEventListener("focus", function () {
      el.parentElement.classList.add("focused");
    })
  );
  // when input is focused remove focused class for style
  let input_group_focused = document.querySelectorAll(".form-control");
  input_group_focused.forEach((el) =>
    el.addEventListener("focusout", function () {
      el.parentElement.classList.remove("focused");
    })
  );

  // Material Design Input function
  let inputs = document.querySelectorAll("input");
  let textareas = document.querySelectorAll("textarea");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("value")) {
      inputs[i].parentElement.classList.add("is-filled");
    }
    inputs[i].addEventListener(
      "focus",
      function (e) {
        this.parentElement.classList.add("is-focused");
      },
      false
    );

    inputs[i].onkeyup = function (e) {
      if (this.value != "") {
        this.parentElement.classList.add("is-filled");
      } else {
        this.parentElement.classList.remove("is-filled");
      }
    };

    inputs[i].addEventListener(
      "focusout",
      function (e) {
        if (this.value != "") {
          this.parentElement.classList.add("is-filled");
        }
        this.parentElement.classList.remove("is-focused");
      },
      false
    );
  }

  for (let i = 0; i < textareas.length; i++) {
    if (textareas[i].hasAttribute("value")) {
      textareas[i].parentElement.classList.add("is-filled");
    }
    textareas[i].addEventListener(
      "focus",
      function (e) {
        this.parentElement.classList.add("is-focused");
      },
      false
    );

    textareas[i].onkeyup = function (e) {
      if (this.value != "") {
        this.parentElement.classList.add("is-filled");
      } else {
        this.parentElement.classList.remove("is-filled");
      }
    };

    textareas[i].addEventListener(
      "focusout",
      function (e) {
        if (this.value != "") {
          this.parentElement.classList.add("is-filled");
        }
        this.parentElement.classList.remove("is-focused");
      },
      false
    );
  }
})();
