if (process.browser) {
  const createRipple = (event, color) => {
    const element = event.currentTarget;

    const circle = document.createElement('span');

    circle.classList.add('ripple-effect');

    circle.style.width = '2px';
    circle.style.height = '2px';
    circle.style.position = 'absolute';
    circle.style.top = `${event.pageY - element.offsetTop}px`;
    circle.style.left = `${event.pageX - element.offsetLeft}px`;
    circle.style.transform = 'scale(0)';
    circle.style.borderRadius = '50%';
    circle.style.pointerEvents = 'none';
    circle.style.backgroundColor =
      color === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)';

    circle.animate(
      [
        {
          transform: 'scale(0)',
          opacity: 1,
        },
        {
          transform: `scale(${element.offsetWidth})`,
          opacity: 0,
        },
      ],
      {
        duration: 500,
        easing: 'linear',
      },
    );

    element.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  };

  const lightElements = document.querySelectorAll(
    '[data-md-ripple-light="true"]',
  );
  const darkElements = document.querySelectorAll(
    '[data-md-ripple-dark="true"]',
  );

  for (const element of lightElements) {
    element.addEventListener('mousedown', (event) =>
      createRipple(event, 'light'),
    );
  }

  for (const element of darkElements) {
    element.addEventListener('mousedown', (event) =>
      createRipple(event, 'dark'),
    );
  }
}
