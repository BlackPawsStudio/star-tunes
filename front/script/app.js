const asideTop = document.getElementsByClassName('aside-links')[0];
const asidePiano = document.getElementsByClassName('aside-links')[1];

const logIn = document.getElementsByClassName('header-btn')[0];
const signIn = document.getElementsByClassName('header-btn')[1];

signIn.addEventListener('click', () => {
  loadPopup(true);
})

logIn.addEventListener('click', () => {
  loadPopup(false);
})

asidePiano.addEventListener('click', (e) => {
  loadPiano();
});

asideTop.addEventListener('click', () => {
  loadTopSongs();
});

loadTopSongs()