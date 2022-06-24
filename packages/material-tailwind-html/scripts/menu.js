(function () {
  let dropdown_trigger = document.querySelectorAll("[menu-trigger]");

  for (let i = 0; i < dropdown_trigger.length; i++) {
    dropdown_trigger[i].addEventListener("click", function () {
      this.parentElement.classList.toggle("open");

      let dropdown_menu = document.querySelectorAll(
        ".menu-item + .dropdown-menu"
      );
      for (let i = 0; i < dropdown_menu.length; i++) {
        let menu_item = dropdown_menu[i].previousElementSibling;
        menu_item.addEventListener("click", nestedMenuClickHandler);
      }
    });

    let dropdown = dropdown_trigger[i].nextElementSibling;
    let close = () => {
      dropdown.parentElement.classList.remove("open");
    };
    window.addEventListener("click", function (e) {
      if (dropdown.parentElement.classList.contains("open")) {
        if (
          !dropdown.contains(e.target) &&
          !dropdown.previousElementSibling.contains(e.target)
        ) {
          close();
        }
      }
    });
  }

  function nestedMenuClickHandler() {
    this.nextElementSibling.classList.toggle("open");
  }
})();
