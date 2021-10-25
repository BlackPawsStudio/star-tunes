const asideTop = document.getElementsByClassName('aside-links')[0];
const asidePiano = document.getElementsByClassName('aside-links')[1];
const asideProfile = document.getElementsByClassName('aside-links')[1];


loadRegisterBtns()
loadTopSongs()

asidePiano.addEventListener('click', (e) => {
  loadPiano();
});

asideTop.addEventListener('click', () => {
  loadTopSongs();
});

asideProfile.addEventListener('click', () => {
  loadProfile(userData[0])
})