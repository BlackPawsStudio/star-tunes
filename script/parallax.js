document.addEventListener('mousemove', parallax)
const elem = document.querySelector('#parallax');

function parallax(e) {
  let w = window.innerWidth/2;
  let h = window.innerHeight/2;
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let depth = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`;
  let x = `${depth}`;
  elem.style.backgroundPosition = x;
}