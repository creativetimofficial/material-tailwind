(function () {
  const triggers = document.querySelectorAll("[data-dialog-target]");
  const dialogs = document.querySelectorAll("[data-dialog]");
  const backdrops = document.querySelectorAll("[data-dialog-backdrop]");
  const closeTriggers = document.querySelectorAll("[data-dialog-close]");

  if (triggers && dialogs && backdrops) {
    Array.from(triggers).forEach((trigger) =>
      Array.from(dialogs).forEach((dialog) =>
        Array.from(backdrops).forEach((backdrop) => {
          if (
            trigger.dataset.dialogTarget === dialog.dataset.dialog &&
            backdrop.dataset.dialogBackdrop === dialog.dataset.dialog
          ) {
            const mountValue =
              dialog.dataset.dialogMount || "opacity-1 translate-y-0";
            const unmountValue =
              dialog.dataset.dialogUnmount || "opacity-0 -translate-y-14";
            const transitionValue =
              dialog.dataset.dialogTransition || "transition-all duration-300";
            const mountClasses = mountValue.split(" ");
            const unmountClasses = unmountValue.split(" ");
            const transitionClasses = transitionValue.split(" ");
            let isDialogOpen = false;

            dialog.classList.add(...unmountClasses);

            if (!backdrop.hasAttribute("tabindex"))
              backdrop.setAttribute("tabindex", 0);
            if (transitionValue !== "false")
              dialog.classList.add(...transitionClasses);

            if (
              dialog.className.includes(unmountValue) &&
              !backdrop.className.includes("pointer-events-none opacity-0")
            ) {
              backdrop.classList.add("pointer-events-none");
              backdrop.classList.add("opacity-0");
            }

            function mountDialog() {
              isDialogOpen = true;
              backdrop.classList.toggle("pointer-events-none");
              backdrop.classList.toggle("opacity-0");
              dialog.classList.remove(...unmountClasses);
              dialog.classList.add(...mountClasses);
            }

            function unmountDialog() {
              isDialogOpen = false;
              backdrop.classList.toggle("pointer-events-none");
              backdrop.classList.toggle("opacity-0");
              dialog.classList.remove(...mountClasses);
              dialog.classList.add(...unmountClasses);
            }

            trigger.addEventListener("click", () =>
              dialog.className.includes(unmountValue)
                ? mountDialog()
                : unmountDialog()
            );

            backdrop.addEventListener("click", ({ target }) => {
              if (
                target?.dataset?.dialogBackdrop &&
                target?.dataset?.dialogBackdropClose
              )
                unmountDialog();
            });

            document.addEventListener("keyup", ({ key }) =>
              key === "Escape" && isDialogOpen ? unmountDialog() : null
            );

            Array.from(closeTriggers).forEach((close) =>
              close.addEventListener("click", () =>
                isDialogOpen ? unmountDialog() : null
              )
            );
          }
        })
      )
    );
  }
})();
