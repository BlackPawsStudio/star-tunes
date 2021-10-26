const enableProfile = (user) => {
  const pianoBtn = document.getElementsByClassName('profile-sec-btn')[0];
  pianoBtn.addEventListener('click', () => {
    loadPiano();
  })
}