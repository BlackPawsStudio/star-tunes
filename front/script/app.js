const asideTop = document.getElementsByClassName('aside-links')[0]
const asidePiano = document.getElementsByClassName('aside-links')[1]

asidePiano.addEventListener('click', () => {
  loadPiano();
});

asideTop.addEventListener('click', () => {
  loadTopSongs();
});

loadTopSongs();