const main = document.querySelector('main');

const loadPiano = () => {
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
  loadFrame();
  const songsList = document.getElementById('songs-list');
  songsList.innerHTML = getTop(topData)
}

const loadPopup = (firstTime) => {
  const popup = document.getElementById('popup');
  const popupCont = document.getElementById('popup-container');
  popupCont.style.display = 'block';
  popup.innerHTML = '';
  popup.innerHTML = fillPopup(firstTime);
  const cancel = document.getElementsByClassName("popup-btn")[1];
  cancel.addEventListener('click', () => {
    popupCont.style.display = 'none';
  })
}