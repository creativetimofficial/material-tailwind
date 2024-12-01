(function () {
  const triggers = document.querySelectorAll("[data-collapse-target]");
  const collapses = document.querySelectorAll("[data-collapse]");

  if (triggers && collapses) {
    Array.from(triggers).forEach((trigger) =>
      Array.from(collapses).forEach((collapse) => {
        if (trigger.dataset.collapseTarget === collapse.dataset.collapse) {
          trigger.addEventListener("click", () => {
            if (collapse.style.height && collapse.style.height !== "0px") {
              collapse.style.height = 0;
              collapse.style.overflow = "hidden";
              trigger.removeAttribute("open");
            } else {
              collapse.style.height = `${collapse.children[0].clientHeight}px`;
              collapse.style.overflow = "visible";
              trigger.setAttribute("open", "");
            }
          });
        }
      }),
    );
  }
})();
