const blob = document.querySelector('.blob');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Get the body’s left and top padding values
  const bodyStyles = getComputedStyle(document.body);
  const paddingLeft = parseFloat(bodyStyles.paddingLeft);
  const paddingTop = parseFloat(bodyStyles.paddingTop);

  // Blob width and height for centering
  const blobWidth = blob.offsetWidth / 2;
  const blobHeight = blob.offsetHeight / 2;

  // Adjust position to account for padding
  const x = clientX - blobWidth - paddingLeft;
  const y = clientY - blobHeight - paddingTop;

  blob.style.transform = `translate(${x}px, ${y}px)`;
});
