const asideTop = document.getElementsByClassName('aside-links')[0];
const asidePiano = document.getElementsByClassName('aside-links')[1];
const asideProfile = document.getElementsByClassName('aside-links')[2];

let currUser = null;

loadTopSongs()
loadRegisterBtns()

asidePiano.addEventListener('click', (e) => {
  loadPiano();
});

asideTop.addEventListener('click', () => {
  loadTopSongs();
});

asideProfile.addEventListener('click', () => {
  if (currUser) loadProfile(currUser)
  else {
    askUser('Please sign up first')
  }
})