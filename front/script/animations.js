const sunClouds = document.getElementsByClassName('sun-cloud');
const sun = document.getElementById('sun');
const aside = document.getElementsByTagName('aside')[0];
const container = document.getElementById('body-container')

sun.addEventListener('click', () => {
  aside.classList.toggle('slide')
  container.addEventListener('click', () => {
    aside.classList.remove('slide')
  })
})


sun.addEventListener('mouseenter', () => {
  console.log(sunClouds[1])
  sunClouds[0].classList.add("cloud-move-f")
  sunClouds[1].classList.add("cloud-move-b")
  sun.addEventListener('mouseleave', () => {
    sunClouds[0].classList.remove("cloud-move-f")
    sunClouds[1].classList.remove("cloud-move-b")
  })
})