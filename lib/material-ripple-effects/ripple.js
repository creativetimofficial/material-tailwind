class Ripple {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  findFurthestPoint(
    clickPointX,
    elementWidth,
    offsetX,
    clickPointY,
    elementHeight,
    offsetY,
  ) {
    this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    this.z = Math.hypot(
      this.x - (clickPointX - offsetX),
      this.y - (clickPointY - offsetY),
    );

    return this.z;
  }

  appyStyles(element, color, rect, radius, event) {
    element.classList.add('ripple');
    element.style.backgroundColor =
      color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)';
    element.style.borderRadius = '50%';
    element.style.pointerEvents = 'none';
    element.style.position = 'absolute';
    element.style.left = event.clientX - rect.left - radius + 'px';
    element.style.top = event.clientY - rect.top - radius + 'px';
    element.style.width = element.style.height = radius * 2 + 'px';
  }

  applyAnimation(element) {
    element.animate(
      [
        {
          transform: 'scale(0)',
          opacity: 1,
        },
        {
          transform: 'scale(1.5)',
          opacity: 0,
        },
      ],
      {
        duration: 500,
        easing: 'linear',
      },
    );
  }

  create(event, color) {
    const element = event.currentTarget;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';

    const rect = element.getBoundingClientRect();

    const radius = this.findFurthestPoint(
      event.clientX,
      element.offsetWidth,
      rect.left,
      event.clientY,
      element.offsetHeight,
      rect.top,
    );

    const circle = document.createElement('span');

    this.appyStyles(circle, color, rect, radius, event);
    this.applyAnimation(circle);

    element.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  }
}

(function setRipple() {
  const ripple = new Ripple();

  const lightRipple = document.querySelectorAll('[data-ripple-light="true"]');
  const darkRipple = document.querySelectorAll('[data-ripple-dark="true"]');

  if (lightRipple) {
    for (let element of lightRipple) {
      element.addEventListener('mouseup', function (event) {
        ripple.create(event, 'light');
      });
    }
  }

  if (darkRipple) {
    for (let element of darkRipple) {
      element.addEventListener('mouseup', function (event) {
        ripple.create(event, 'dark');
      });
    }
  }
})();
