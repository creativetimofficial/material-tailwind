import noUiSlider from "nouislider";

export default function init() {
  ("use strict");
  (function () {
    var slider = document.getElementById("sliderRegular");

    if (slider) {
      if (slider.noUiSlider) {
        slider.noUiSlider.destroy();
      }

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100,
        },
      });
    }
  })();
  ("use strict");
  (function () {
    if (document.getElementById("choice-button")) {
      var element = document.getElementById("choice-button");
      var example = new Choices(element, { searchEnabled: false });
    }
    if (document.getElementById("choice-search")) {
      var element = document.getElementById("choice-search");
      var example1 = new Choices(element, {});
    }
    // if (document.getElementById("multi-select")) {
    //   var element = document.getElementById("multi-select");
    //   var example2 = new Choices(element, { searchEnabled: false });
    // }
  })();
}
