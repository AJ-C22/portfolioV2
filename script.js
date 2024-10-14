const blob = document.querySelector('.blob');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  const bodyStyles = getComputedStyle(document.body);
  const paddingLeft = parseFloat(bodyStyles.paddingLeft);
  const paddingTop = parseFloat(bodyStyles.paddingTop);

  const blobWidth = blob.offsetWidth / 2;
  const blobHeight = blob.offsetHeight / 2;

  const x = clientX - blobWidth - paddingLeft;
  const y = clientY - blobHeight - paddingTop;

  blob.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.fade-in-up');

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 100); 
  });
});
