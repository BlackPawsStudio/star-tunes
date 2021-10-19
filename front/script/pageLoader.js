const main = document.querySelector('main');

const loadPiano = () => {
  main.innerHTML = '';
  main.innerHTML = getPiano()
  enablePiano()
}

const loadFrame = () => {
  main.innerHTML = '';
  main.innerHTML = renderFrame();
}

const loadTopSongs = () => {
  loadFrame();
  const songsList = document.getElementById('songs-list');
  songsList.innerHTML = getTop(topData)
}