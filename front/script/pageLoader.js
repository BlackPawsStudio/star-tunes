const main = document.querySelector('main');

const loadPiano = () => {
  self.location.href = '#piano';
  aside.classList.remove('slide');
  main.innerHTML = '';
  main.innerHTML = getPiano()
  enablePiano()
}

const loadFrame = () => {
  aside.classList.remove('slide');
  main.innerHTML = '';
  main.innerHTML = renderFrame();
}

const loadTopSongs = () => {
  self.location.href = '#top';
  loadFrame();
  const songsList = document.getElementById('songs-list');
  songsList.innerHTML = getTop(topData)
}

const loadPopup = (firstTime) => {
  const popup = document.getElementById('popup');
  const popupCont = document.getElementById('popup-container');
  popupCont.style.opacity = 100;
  popupCont.style.visibility = 'visible'
  popup.innerHTML = '';
  popup.innerHTML = fillPopup(firstTime);
  const cancel = document.getElementsByClassName("popup-btn")[1];
  cancel.addEventListener('click', () => {
    popupCont.style.opacity = 0;
    popupCont.style.visibility = 'hidden'
  })
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      popupCont.style.opacity = 0;
     popupCont.style.visibility = 'hidden'
    }
  })
}