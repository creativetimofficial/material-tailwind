(function () {
  let accordion = document.querySelectorAll(".accordion-button");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", openCurrentAccordion);
  }

  function openCurrentAccordion(e) {
    for (let i = 0; i < accordion.length; i++) {
      let parent = accordion[i].parentElement;
      let collapse = parent.nextElementSibling;

      if (this === accordion[i] && !collapse.classList.contains("open")) {
        accordion[i].setAttribute("aria-expanded", "true");
        collapse.classList.add("open");
        accordion[i].classList.add("collapsed");
        collapse.style.maxHeight = collapse.scrollHeight + "px";
      } else {
        accordion[i].setAttribute("aria-expanded", "false");
        collapse.classList.remove("open");
        accordion[i].classList.remove("collapsed");
        collapse.style.maxHeight = "0px";
      }
    }
  }

  // Navbar collapse

  if (document.querySelector("[navbar-trigger]")) {
    let expand_trigger = document.querySelector("[navbar-trigger]");
    let bar1 = document.querySelector("[bar1]");
    let bar2 = document.querySelector("[bar2]");
    let bar3 = document.querySelector("[bar3]");

    expand_trigger.addEventListener("click", function () {
      let navbar_collapse = document.querySelector("[navbar-menu]");

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
