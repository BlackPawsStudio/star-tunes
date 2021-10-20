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