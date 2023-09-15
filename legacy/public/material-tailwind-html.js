export default function init() {
  ("use strict");
  (function () {
    var triggers = document.querySelectorAll("[data-notification]");
    triggers.forEach((trigger) => {
      let notificationId = trigger.getAttribute("data-target");

      trigger.addEventListener("click", function () {
        let notification = document.querySelector("#" + notificationId);

        if (trigger.getAttribute("aria-hidden") == "true") {
          trigger.setAttribute("aria-hidden", "false");
          notification.classList.add("show");

          setTimeout(function () {
            trigger.setAttribute("aria-hidden", "true");
            notification.classList.remove("show");
          }, 3800);
        }
      });
    });
  })();

  ("use strict");
  (function () {
    let alert_dismiss = document.querySelectorAll("[alert-dismiss]");

    alert_dismiss.forEach((dismiss) =>
      dismiss.addEventListener("click", function () {
        dismiss.parentElement.parentElement.classList.add("hidden");
      })
    );
  })();

  ("use strict");
  (function () {
    if (document.querySelector("[data-collapse]")) {
      var accordion = document.querySelector("[data-collapse]");

      var sections = accordion.querySelectorAll("[data-collapse-section]");

      sections.forEach((section) => {
        let trigger = section.querySelector("[data-collapse-trigger]");

        trigger.addEventListener("click", function () {
          if (this.getAttribute("aria-expanded") == "true") {
            this.setAttribute("aria-expanded", "false");
          } else {
            let accordion = this.closest("[data-collapse]");
            let triggers = accordion.querySelectorAll(
              "[data-collapse-trigger]"
            );
            triggers.forEach((trigger) => {
              trigger.setAttribute("aria-expanded", "false");
            });
            this.setAttribute("aria-expanded", "true");
          }
          init(sections);
        });
      });

      //initialization max height
      init(sections);

      function init(sections) {
        sections.forEach((section) => {
          let content = section.querySelector("[data-collapse-content]");
          let trigger = section.querySelector("[data-collapse-trigger]");
          if (trigger.getAttribute("aria-expanded") == "true") {
            if (trigger.querySelector("[section-close-icon]")) {
              let close_icon = trigger.querySelector("[section-close-icon]");
              close_icon.classList.remove("hidden");
            }
            if (trigger.querySelector("[section-open-icon]")) {
              let open_icon = trigger.querySelector("[section-open-icon]");
              open_icon.classList.add("hidden");
            }
            trigger.classList.remove("text-slate-500");
            trigger.classList.add("text-slate-700");
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            if (trigger.querySelector("[section-open-icon]")) {
              let open_icon = trigger.querySelector("[section-open-icon]");
              open_icon.classList.remove("hidden");
            }
            if (trigger.querySelector("[section-close-icon]")) {
              let close_icon = trigger.querySelector("[section-close-icon]");
              close_icon.classList.add("hidden");
            }
            trigger.classList.remove("text-slate-700");
            trigger.classList.add("text-slate-500");
            content.style.maxHeight = "0px";
          }
        });
      }
    }

    if (document.querySelector("[navbar-trigger]")) {
      var expand_trigger = document.querySelector("[navbar-trigger]");
      var bar1 = document.querySelector("[bar1]");
      var bar2 = document.querySelector("[bar2]");
      var bar3 = document.querySelector("[bar3]");
      expand_trigger.addEventListener("click", function () {
        var navbar_collapse = document.querySelector(".navbar-collapse");
        navbar_collapse.classList.toggle("open");
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("origin-[10%_10%]");
        bar1.classList.toggle("mt-1");
        bar2.classList.toggle("opacity-0");
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("origin-[10%_90%]");
        bar3.classList.toggle("mt-[0.1875rem]");
        bar3.classList.toggle("mt-[0.4375rem]");
      });
    }
  })();
}