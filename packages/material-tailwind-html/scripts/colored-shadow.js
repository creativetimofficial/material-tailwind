(function () {
  if (document.querySelectorAll("[blur-shadow-image]")) {
    let shadowCards = document.querySelectorAll("[blur-shadow-image]");
    let shadowCardsRounded = document.querySelectorAll(
      "[blur-shadow-image][rounded]"
    );

    if (shadowCardsRounded) {
      for (let i = 0; i < shadowCardsRounded.length; i++) {
        let div = document.createElement("DIV");
        shadowCardsRounded[i].parentElement.appendChild(div);
        div.classList.add("colored-shadow", "rounded-full");

        let currentSrc = shadowCardsRounded[i].children[0].getAttribute("src");
        let el = shadowCardsRounded[i].nextElementSibling;

        el.style.backgroundImage = "url(" + currentSrc + ")";
      }
    }
    if (shadowCards) {
      for (let i = 0; i < shadowCards.length; i++) {
        let div = document.createElement("DIV");
        shadowCards[i].parentElement.appendChild(div);
        div.classList.add("colored-shadow");

        let currentSrc = shadowCards[i].children[0].getAttribute("src");
        let el = shadowCards[i].nextElementSibling;

        el.style.backgroundImage = "url(" + currentSrc + ")";
      }
    }
  }

  // Colored shadows for Avatars
  if (document.querySelector("[blur-shadow-avatar]")) {
    let shadowCards = document.querySelectorAll("[blur-shadow-avatar]");
    let shadowCardsRounded = document.querySelectorAll(
      "[blur-shadow-avatar-rounded]"
    );

    if (shadowCardsRounded) {
      for (let i = 0; i < shadowCardsRounded.length; i++) {
        let div = document.createElement("DIV");
        shadowCardsRounded[i].append(div);
        div.classList.add(
          "colored-shadow",
          "rounded-full",
          "start-0",
          "end-0",
          "mx-auto"
        );

        let avatarClasses = [
          "avatar-xs",
          "avatar-sm",
          "avatar-lg",
          "avatar-xl",
          "avatar-xxl",
        ];

        for (let k = 0; k < avatarClasses.length; k++) {
          if (
            shadowCardsRounded[i].firstElementChild.classList.contains(
              avatarClasses[k]
            )
          ) {
            div.classList.add(avatarClasses[k]);
          }
        }

        let currentSrc = shadowCardsRounded[i].children[0].getAttribute("src");
        div.style.backgroundImage = "url(" + currentSrc + ")";
      }
    }
    if (shadowCards) {
      for (let i = 0; i < shadowCards.length; i++) {
        let div = document.createElement("DIV");
        shadowCards[i].append(div);
        div.classList.add("colored-shadow", "start-0", "end-0", "mx-auto");

        let avatarClasses = [
          "avatar-xs",
          "avatar-sm",
          "avatar-lg",
          "avatar-xl",
          "avatar-xxl",
        ];

        for (let k = 0; k < avatarClasses.length; k++) {
          if (
            shadowCards[i].firstElementChild.classList.contains(
              avatarClasses[k]
            )
          ) {
            div.classList.add(avatarClasses[k]);
          }
        }

        let currentSrc = shadowCards[i].children[0].getAttribute("src");
        div.style.backgroundImage = "url(" + currentSrc + ")";
      }
    }
  }
})();
