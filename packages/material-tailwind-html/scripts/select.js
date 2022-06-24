(function () {
  if (document.getElementById("choice-button")) {
    var element = document.getElementById("choice-button");
    let example = new Choices(element, {
      searchEnabled: false,
    });
  }

  if (document.getElementById("choice-search")) {
    var element = document.getElementById("choice-search");
    let example = new Choices(element, {});
  }
})();
