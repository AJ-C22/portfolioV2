const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  if (themeIcon) {
    themeIcon.className = isLight
      ? 'fa-regular fa-moon'
      : 'fa-regular fa-sun';
  }
  themeToggle.setAttribute(
    'aria-label',
    isLight ? 'Toggle dark mode' : 'Toggle light mode'
  );
});

window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in-up').forEach((element, index) => {
    setTimeout(() => element.classList.add('visible'), index * 80);
  });
});
