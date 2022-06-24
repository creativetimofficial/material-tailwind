(function () {
  if (document.querySelectorAll(".progress-bar")) {
    let link = document.querySelectorAll(".progress-bar");

    for (let i = 0; i < link.length; i++) {
      let value = link[i].getAttribute("data-value");
      link[i].setAttribute("style", "width:" + value + "%;");
    }
  }
})();
