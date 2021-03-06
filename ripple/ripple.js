if (process.browser) {
  function findFurthestPoint(
    clickPointX,
    elementWidth,
    offsetX,
    clickPointY,
    elementHeight,
    offsetY,
  ) {
    let x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    let y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    let z = Math.hypot(
      x - (clickPointX - offsetX),
      y - (clickPointY - offsetY),
    );
    return z;
  }

  function createRipple(event, color) {
    const element = event.currentTarget;

    const rect = element.getBoundingClientRect();
    const radius = findFurthestPoint(
      event.clientX,
      element.offsetWidth,
      rect.left,
      event.clientY,
      element.offsetHeight,
      rect.top,
    );

    const circle = document.createElement('span');

    circle.classList.add('ripple');
    circle.style.backgroundColor =
      color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)';
    circle.style.borderRadius = '50%';
    circle.style.pointerEvents = 'none';
    circle.style.position = 'absolute';
    circle.style.left = event.clientX - rect.left - radius + 'px';
    circle.style.top = event.clientY - rect.top - radius + 'px';
    circle.style.width = circle.style.height = radius * 2 + 'px';

    circle.animate(
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

    element.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  }

  const lightRipple = document.querySelector('[data-md-ripple-light="true"]');
  const darkRipple = document.querySelector('[data-md-ripple-dark="true"]');

  lightRipple &&
    lightRipple.addEventListener('mousedown', (event) =>
      createRipple(event, 'light'),
    );
  darkRipple &&
    darkRipple.addEventListener('mousedown', (event) =>
      createRipple(event, 'dark'),
    );
}
