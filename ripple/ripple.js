if (process.browser) {
  function createRipple(event) {
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
    circle.style.backgroundColor = element.classList.contains('bg-transparent')
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.3)';

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
  }

  const elements = document.querySelectorAll('[data-md-ripple="true"]');

  for (const element of elements) {
    element.addEventListener('mousedown', createRipple);
  }
}
