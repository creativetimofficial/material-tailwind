window.onload = function() {

  // Alert Dismiss
  var alert_dismiss = document.querySelectorAll('[alert-dismiss]');
  alert_dismiss.forEach((dismiss) =>
    dismiss.addEventListener('click', function () {
      dismiss.parentElement.classList.add('hide');
    })
  )

  // Dropdown / Menu
  var dropdown_trigger = document.querySelectorAll('[menu-trigger]');

  for (var i = 0; i < dropdown_trigger.length; i++) {
    dropdown_trigger[i].addEventListener('click', function () {
      this.parentElement.classList.toggle('open');

      var dropdown_menu = document.querySelectorAll('.menu-item + .dropdown-menu');
      console.log(dropdown_menu);
      for (var i = 0; i < dropdown_menu.length; i++) {
        var menu_item = dropdown_menu[i].previousSibling;
        menu_item.addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('open');
        })
      }
    })

    let dropdown = dropdown_trigger[i].nextElementSibling;
    const close = () => {
      dropdown.parentElement.classList.remove('open');
    }
    window.addEventListener('click', function(e) {
      if (dropdown.parentElement.classList.contains('open')) {
        if (!dropdown.contains(e.target) && !dropdown.previousSibling.contains(e.target)){
          close();
        }
      }
    });
  };

  // Colored shadow
  if (document.querySelectorAll('[blur-shadow-image]')) {
    var shadowCards = document.querySelectorAll('[blur-shadow-image]');
    var shadowCardsRounded = document.querySelectorAll('[blur-shadow-image][rounded]');
  
    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {
        var div = document.createElement("DIV");
        shadowCardsRounded[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow', 'rounded-full');
  
        var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
        var el = shadowCardsRounded[i].nextElementSibling;
  
        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {
      for (var i = 0; i < shadowCards.length; i++) {
        var div = document.createElement("DIV");
        shadowCards[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow');
  
        var currentSrc = shadowCards[i].children[0].getAttribute('src');
        var el = shadowCards[i].nextElementSibling;
  
        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
  }

  // Colored shadows for Avatars
  if (document.querySelector('[blur-shadow-avatar]')) {
    var shadowCards = document.querySelectorAll('[blur-shadow-avatar]');
    var shadowCardsRounded = document.querySelectorAll('[blur-shadow-avatar-rounded]');

    if (shadowCardsRounded) {
      for (var i = 0; i < shadowCardsRounded.length; i++) {

        var div = document.createElement("DIV");
        shadowCardsRounded[i].append(div);
        div.classList.add('colored-shadow', 'rounded-full', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCardsRounded[i].firstElementChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
        div.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {
      for (var i = 0; i < shadowCards.length; i++) {

        var div = document.createElement("DIV");
        shadowCards[i].append(div);
        div.classList.add('colored-shadow', 'start-0', 'end-0', 'mx-auto');

        var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

        for (var k = 0; k < avatarClasses.length; k++) {
          if (shadowCards[i].firstElementChild.classList.contains(avatarClasses[k])) {
            div.classList.add(avatarClasses[k]);
          }
        }

        var currentSrc = shadowCards[i].children[0].getAttribute('src');
        div.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
  }

  // Dialog

  var dialogTrigger = document.querySelectorAll('[dialog-trigger]');
  for(var i = 0; i < dialogTrigger.length; i++) {
    dialogTrigger[i].onclick = function() {
      var dialogWindow = this.nextElementSibling;
      dialogWindow.classList ? dialogWindow.classList.add('open') : dialogWindow.className += ' ' + 'open'; 
    }
  }

  var closeButton = document.querySelectorAll("[dialog-close]");
  for(var i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      var dialogWindow = this.closest('.dialog');
      dialogWindow.classList ? dialogWindow.classList.remove('open') : dialogWindow.className = dialogWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  // Inputs

  // when input is focused add focused class for style
  var input_group = document.querySelectorAll(".form-control");
  input_group.forEach((el) =>
    el.addEventListener('focus', function () {
      el.parentElement.classList.add('focused');
    })
  )
  // when input is focused remove focused class for style
  var input_group_focused = document.querySelectorAll(".form-control");
  input_group_focused.forEach((el) =>
    el.addEventListener('focusout', function () {
      el.parentElement.classList.remove('focused');
    })
  )
  
  // Material Design Input function
  var inputs = document.querySelectorAll('input');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].hasAttribute('value')){
      inputs[i].parentElement.classList.add('is-filled');
    }
    inputs[i].addEventListener('focus', function(e) {
      this.parentElement.classList.add('is-focused');
    }, false);

    inputs[i].onkeyup = function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      } else {
        this.parentElement.classList.remove('is-filled');
      }
    };

    inputs[i].addEventListener('focusout', function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      }
      this.parentElement.classList.remove('is-focused');
    }, false);
  }

  for (var i = 0; i < textareas.length; i++) {
    if(textareas[i].hasAttribute('value')){
      textareas[i].parentElement.classList.add('is-filled');
    }
    textareas[i].addEventListener('focus', function(e) {
      this.parentElement.classList.add('is-focused');
    }, false);

    textareas[i].onkeyup = function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      } else {
        this.parentElement.classList.remove('is-filled');
      }
    };

    textareas[i].addEventListener('focusout', function(e) {
      if(this.value != ""){
        this.parentElement.classList.add('is-filled');
      }
      this.parentElement.classList.remove('is-focused');
    }, false);
  }

  // Collapse

  var accordion = document.querySelectorAll('.accordion-button');

  for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', openCurrentAccordion);
  }

  function openCurrentAccordion(e) {
    for(var i = 0; i < accordion.length; i++) {

      var parent = accordion[i].parentElement;
      var collapse = parent.nextElementSibling;

      if (this === accordion[i] && !collapse.classList.contains('open')) {
        accordion[i].setAttribute('aria-expanded','true');
        collapse.classList.add('open');
        accordion[i].classList.add('collapsed');
        collapse.style.maxHeight = collapse.scrollHeight + 'px';
      }
      else {
        accordion[i].setAttribute('aria-expanded','false');
        collapse.classList.remove('open');
        accordion[i].classList.remove('collapsed');
        collapse.style.maxHeight = '0px';
      }
    }
  }

  // Radio
  var radios = document.querySelectorAll('[type="radio"]');
  
  radios.forEach((radio) =>
  radio.addEventListener('click', function () {
    for(var i = 0; i < radios.length; i++) {
      if(radios[i].hasAttribute('checked')){
        radios[i].removeAttribute('checked');
      }  
    }
  
    radio.setAttribute('checked','true');
  })
  )

  // Tooltips

  if (document.querySelectorAll('[data-target="tooltip"]')) {
    const buttons = document.querySelectorAll('[data-target="tooltip"]');

    buttons.forEach((button) => {
      
      const tooltip = button.nextElementSibling;
      const placement = tooltip.getAttribute('data-placement');

      const popperInstance = Popper.createPopper(button, tooltip, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
        placement: placement,
      });

      function show() {
        tooltip.setAttribute('data-show', '');

        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: true },
          ],
        }));

        popperInstance.update();
      }

      function hide() {
        tooltip.removeAttribute('data-show');
        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
          ],
        }));
      }

      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach((event) => {
        button.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        button.addEventListener(event, hide);
      });
    });

  }

  // Popovers
  if (document.querySelector('[data-target="popover"]')) {
    var triggers = document.querySelectorAll('[data-target="popover"]');
   
    function openPopover(event) {
      var element = event.target;
      var popover = element.nextElementSibling;

      var placement = popover.getAttribute('data-popper-placement');
      element = Popper.createPopper(element, popover, {
        placement: placement,
      });
      popover.classList.toggle("hidden");
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', openPopover);
    })
  }

  // Toggle

  var toggles = document.querySelectorAll('[data-attribute="toggle"]');
  toggles.forEach((trigger) =>
    trigger.addEventListener('click', function () {
      trigger.nextElementSibling.toggleAttribute('checked');
    })
  )
  
  // Carousel
  if (document.querySelector('[data-slides]')) {
    const timer = 5000;
    const slides = document.querySelector("[data-slides]");
    const slidesNumber = slides.childElementCount;
    const maxLeft = (slidesNumber - 1) * 100 * -1;
    
    let active = 0;
    
    function changeSlide(next = true) {
      if (next) {
        active += active > maxLeft ? -100 : active * -1;
      } else {
        active = active < 0 ? active + 100 : maxLeft;
      }
    
      slides.style.left = active + "%";
    }
    
    let autoChange = setInterval(changeSlide, timer);
    const restart = function() {
      clearInterval(autoChange);
      autoChange = setInterval(changeSlide, timer);
    };
    
    document.querySelector("[next-slide]").addEventListener("click", function() {
      changeSlide();
      restart();
    });
    
    document.querySelector("[prev-slide]").addEventListener("click", function() {
      changeSlide(false);
      restart();
    });
  }

  // Progress
  if (document.querySelectorAll('.progress-bar')) {
    const link = document.querySelectorAll('.progress-bar');

    for (let i = 0; i < link.length; i++) {
      var value = link[i].getAttribute('data-value');      
      link[i].setAttribute("style", 'width:'+value+'%;');
    }
  }
}

// Tabs navigation

var total = document.querySelectorAll(".nav-pills");

total.forEach(function (item, i) {
  var moving_div = document.createElement("div");
  var first_li = item.querySelector("li:first-child .nav-link");
  var tab = first_li.cloneNode();
  tab.innerHTML = "-";
  tab.classList.remove("bg-inherit");
  tab.classList.add("bg-white");
  tab.classList.add("text-white");
  tab.classList.add("shadow-soft-xxs");
  tab.style.animation = ".2s ease";

  moving_div.classList.add("moving-tab", "z-10", "absolute", "nav-link", "text-slate-700", "rounded-lg", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  var list_length = item.getElementsByTagName("li").length;

  moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
  moving_div.style.padding = "0px";
  moving_div.style.width = item.querySelector("li:nth-child(1)").offsetWidth + "px";
  moving_div.style.transform = "translate3d(0px, 0px, 0px)";
  moving_div.style.transition = ".5s ease";

  item.onmouseover = function (event) {
    let target = getEventTarget(event);
    let li = target.closest("li");
    if (li) {
      let nodes = Array.from(li.closest("ul").children);
      let index = nodes.indexOf(li) + 1;
      item.querySelector("li:nth-child(" + index + ") .nav-link").onclick = function () {
        item.querySelectorAll("li").forEach(function (list_item) {
          list_item.firstElementChild.classList.remove("active");
        });
        li.firstElementChild.classList.add("active");
        moving_div = item.querySelector(".moving-tab");
        let sum = 0;
        if (item.classList.contains("flex-col")) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
          moving_div.style.height = item.querySelector("li:nth-child(" + j + ")").offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
        }
      };
    }
  };
});

// Tabs navigation

var total = document.querySelectorAll("[nav-pills]");

total.forEach(function (item, i) {
  var moving_div = document.createElement("div");
  var first_li = item.querySelector("li:first-child [nav-link]");
  var tab = first_li.cloneNode();
  tab.innerHTML = "-";
  tab.classList.remove("bg-inherit");
  tab.classList.add("bg-white");
  tab.classList.add("text-white");
  tab.classList.add("shadow-soft-xxs");
  tab.style.animation = ".2s ease";

  moving_div.classList.add("z-10", "absolute", "text-slate-700", "rounded-full", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
  moving_div.setAttribute("moving-tab", "");
  moving_div.setAttribute("nav-link", "");
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  var list_length = item.getElementsByTagName("li").length;

  moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
  moving_div.style.padding = "0px";
  moving_div.style.width = item.querySelector("li:nth-child(1)").offsetWidth + "px";
  moving_div.style.transform = "translate3d(0px, 0px, 0px)";
  moving_div.style.transition = ".5s ease";

  item.onmouseover = function (event) {
    let target = getEventTarget(event);
    let li = target.closest("li");
    if (li) {
      let nodes = Array.from(li.closest("ul").children);
      let index = nodes.indexOf(li) + 1;
      item.querySelector("li:nth-child(" + index + ") [nav-link]").onclick = function () {
        item.querySelectorAll("li").forEach(function (list_item) {
          list_item.firstElementChild.removeAttribute("active");
        });
        li.firstElementChild.setAttribute("active", "");
        moving_div = item.querySelector("[moving-tab]");
        let sum = 0;
        if (item.classList.contains("flex-col")) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
          moving_div.style.height = item.querySelector("li:nth-child(" + j + ")").offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
        }
      };
    }
  };
});

// Tabs navigation resize

window.addEventListener("resize", function (event) {
  total.forEach(function (item, i) {
    item.querySelector("[moving-tab]").remove();
    var moving_div = document.createElement("div");
    var tab = item.querySelector("[nav-link][active]").cloneNode();
    tab.innerHTML = "-";
    tab.classList.remove("bg-inherit");
    tab.classList.add("bg-white");
    tab.classList.add("text-white");
    tab.classList.add("shadow-soft-xxs");
    tab.style.animation = ".2s ease";

    moving_div.classList.add("z-10", "absolute", "text-slate-700", "rounded-full", "bg-inherit", "flex-auto", "text-center", "bg-none", "border-0", "block");
    moving_div.setAttribute("moving-tab", "");
    moving_div.setAttribute("nav-link", "");
    moving_div.appendChild(tab);

    item.appendChild(moving_div);

    moving_div.style.boxShadow = "0 1px 5px 1px #ddd";
    moving_div.style.padding = "0px";
    moving_div.style.transition = ".5s ease";

    let li = item.querySelector("[nav-link][active]").parentElement;

    if (li) {
      let nodes = Array.from(li.closest("ul").children);
      let index = nodes.indexOf(li) + 1;

      let sum = 0;
      if (item.classList.contains("flex-col")) {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
        }
        moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
        moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
        moving_div.style.height = item.querySelector("li:nth-child(" + j + ")").offsetHeight;
      } else {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
        }
        moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
        moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
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

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// Change the npm install command

var navtabs = document.querySelector('.first-tab');
var navtabs_active = document.querySelector('.second-tab');
var code_react = document.getElementById('install_react');
var code_html = document.getElementById('install_html');


if (navtabs) {
  navtabs.addEventListener('click', function(e){
    code_react.classList.add('block');
    code_react.classList.remove('hidden');
    code_html.classList.add('hidden');
    code_html.classList.remove('block');
  })  
}

if (navtabs_active) {
  navtabs_active.addEventListener('click', function(e){
    code_react.classList.add('hidden');
    code_react.classList.remove('block');
    code_html.classList.add('block');
    code_html.classList.remove('hidden');
  })  
}
