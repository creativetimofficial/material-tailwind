if (process.browser) {
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.classList.add('ripple-effect');

    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.position = 'absolute';
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.transform = 'scale(0)';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = button.classList.contains('bg-transparent')
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.5)';

    circle.animate(
      [
        {
          transform: 'scale(0)',
          opacity: 1,
        },
        {
          transform: 'scale(3)',
          opacity: 0,
        },
      ],
      {
        duration: 500,
        easing: 'linear',
      },
    );

    const ripple = button.getElementsByClassName('ripple-effect')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const buttons = document.querySelectorAll('#ripple');

  for (const button of buttons) {
    button.addEventListener('click', createRipple);
  }
}
