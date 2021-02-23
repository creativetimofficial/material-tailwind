if (process.browser) {
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement('span');

    circle.classList.add('ripple-effect');

    circle.style.width = '2px';
    circle.style.height = '2px';
    circle.style.position = 'absolute';
    circle.style.top = `${event.pageY - button.offsetTop}px`;
    circle.style.left = `${event.pageX - button.offsetLeft}px`;
    circle.style.transform = 'scale(0)';
    circle.style.borderRadius = '50%';
    circle.style.pointerEvents = 'none';
    circle.style.backgroundColor = button.classList.contains('bg-transparent')
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.3)';

    circle.animate(
      [
        {
          transform: 'scale(0)',
          opacity: 1,
        },
        {
          transform: `scale(${button.offsetWidth})`,
          opacity: 0,
        },
      ],
      {
        duration: 500,
        easing: 'linear',
      },
    );

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  }

  const buttons = document.querySelectorAll('#ripple');

  for (const button of buttons) {
    button.addEventListener('mousedown', createRipple);
  }
}
