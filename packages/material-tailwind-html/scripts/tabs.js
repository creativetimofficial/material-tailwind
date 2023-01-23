(function () {
  var total = document.querySelectorAll("[data-tabs]");

  var getEventTarget = function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  };

  total.forEach(function (item, i) {
    var moving_div = document.createElement("div");
    var first_li = item.querySelector("li:first-child [data-tab-target]");
    var tab = first_li.cloneNode();
    tab.innerHTML = "-";
    tab.classList.remove("bg-inherit", "text-slate-700");
    tab.classList.add("bg-white", "text-white");
    tab.style.animation = ".2s ease";

    moving_div.classList.add(
      "z-10",
      "absolute",
      "text-slate-700",
      "rounded-lg",
      "bg-inherit",
      "flex-auto",
      "text-center",
      "bg-none",
      "border-0",
      "block",
      "shadow"
    );
    moving_div.setAttribute("moving-tab", "");
    moving_div.setAttribute("data-tab-target", "");
    moving_div.appendChild(tab);
    item.appendChild(moving_div);

    var list_length = item.getElementsByTagName("li").length;

    moving_div.style.padding = "0px";
    moving_div.style.width =
      item.querySelector("li:nth-child(1)").offsetWidth + "px";
    moving_div.style.transform = "translate3d(0px, 0px, 0px)";
    moving_div.style.transition = ".5s ease";

    item.onmouseover = function (event) {
      let target = getEventTarget(event);
      let li = target.closest("li");
      if (li) {
        let nodes = Array.from(li.closest("ul").children);
        let index = nodes.indexOf(li) + 1;
        item.querySelector(
          "li:nth-child(" + index + ") [data-tab-target]"
        ).onclick = function () {
          item.querySelectorAll("li").forEach(function (list_item) {
            list_item.firstElementChild.removeAttribute("active");
            list_item.firstElementChild.setAttribute(
              "aria-selected",
              "false"
            );
          });
          li.firstElementChild.setAttribute("active", "");
          li.firstElementChild.setAttribute("aria-selected", "true");
          moving_div = item.querySelector("[moving-tab]");
          let sum = 0;
          if (item.classList.contains("flex-col")) {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector(
                "li:nth-child(" + j + ")"
              ).offsetHeight;
            }
            moving_div.style.transform =
              "translate3d(0px," + sum + "px, 0px)";
            moving_div.style.height = item.querySelector(
              "li:nth-child(" + j + ")"
            ).offsetHeight;
          } else {
            for (var j = 1; j <= nodes.indexOf(li); j++) {
              sum += item.querySelector(
                "li:nth-child(" + j + ")"
              ).offsetWidth;
            }
            moving_div.style.transform =
              "translate3d(" + sum + "px, 0px, 0px)";
            moving_div.style.width =
              item.querySelector("li:nth-child(" + index + ")").offsetWidth +
              "px";
          }
        };
      }
    };
  });

  window.addEventListener("resize", function (event) {
    total.forEach(function (item, i) {
      item = item.parentElement.firstElementChild;

      item.querySelector("[moving-tab]").remove();
      var moving_div = document.createElement("div");
      var tab = item.querySelector("[data-tab-target][aria-selected='true']").cloneNode();
      tab.innerHTML = "-";
      tab.classList.remove("bg-inherit");
      tab.classList.add("bg-white", "text-white");
      tab.style.animation = ".2s ease";

      moving_div.classList.add(
        "z-10",
        "absolute",
        "text-slate-700",
        "rounded-lg",
        "bg-inherit",
        "flex-auto",
        "text-center",
        "bg-none",
        "border-0",
        "block",
        "shadow"
      );
      moving_div.setAttribute("moving-tab", "");
      moving_div.setAttribute("data-tab-target", "");
      moving_div.appendChild(tab);

      item.appendChild(moving_div);

      moving_div.style.padding = "0px";
      moving_div.style.transition = ".5s ease";

      let li = item.querySelector("[data-tab-target][aria-selected='true']").parentElement;

      if (li) {
        let nodes = Array.from(li.closest("ul").children);
        let index = nodes.indexOf(li) + 1;

        let sum = 0;
        if (item.classList.contains("flex-col")) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
          moving_div.style.width =
            item.querySelector("li:nth-child(" + index + ")").offsetWidth +
            "px";
          moving_div.style.height = item.querySelector(
            "li:nth-child(" + j + ")"
          ).offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width =
            item.querySelector("li:nth-child(" + index + ")").offsetWidth +
            "px";
        }
      }
    });
    if (window.innerWidth < 991) {
      total.forEach(function (item, i) {
        if (!item.classList.contains("flex-col")) {
          item.classList.add("flex-col", "on-resize");
        }
      });
    } else {
      total.forEach(function (item, i) {
        if (item.classList.contains("on-resize")) {
          item.classList.remove("flex-col", "on-resize");
        }
      });
    }
  });
  var total = document.querySelectorAll("[data-tab-content]");
  if (total[0]) {
    total.forEach(function (nav_pills) {
      var links = nav_pills.parentElement.querySelectorAll(
        "li a[data-tab-target]"
      );
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          var clicked_tab = document.querySelector(
            "#" + link.getAttribute("aria-controls")
          );

          if (!clicked_tab.classList.contains("block", "opacity-100")) {
            var active_link = clicked_tab
              .closest("[data-tab-content]")
              .parentElement.querySelector(
                "li a[data-tab-target][aria-selected='true']"
              );

            var active_panel = document.querySelector(
              "#" + active_link.getAttribute("aria-controls")
            );

            active_panel.classList.remove("block", "opacity-100");
            active_panel.classList.add("hidden", "opacity-0");
            clicked_tab.classList.add("block", "opacity-100");
            clicked_tab.classList.remove("hidden", "opacity-0");
          }
        });
      });
    });
  }
})();
