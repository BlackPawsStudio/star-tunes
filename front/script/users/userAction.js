const enableUserBtns = (username) => {
  const enter = document.getElementsByClassName('profile-btn')[0];
  const logOut = document.getElementsByClassName('profile-btn')[1];
  const deleteUser = document.getElementsByClassName('profile-btn')[2];
  const askField = document.getElementById('ask-container')
  const btns = document.getElementsByClassName('question-btn')
  const label = document.getElementById('question-place')
  userData.forEach(element => {
    console.log(element)
  });
  logOut.addEventListener('click', () => {
    label.innerHTML = 'Do you want to log out?';
    askField.classList.add('shown');
    btns[0].addEventListener('click', () => {
      askField.classList.remove('shown');
      loadRegisterBtns();
    })
    btns[1].addEventListener('click', () => {
      askField.classList.remove('shown');
    })
  })
  deleteUser.addEventListener('click', () => {
    label.innerHTML = 'Are you sure you want to delete your account?';
    askField.classList.add('shown');
    btns[0].addEventListener('click', () => {
      askField.classList.remove('shown');
      userData.splice(userData.indexOf(userData.find(el => {
        if (el.name === username) return el
      })), 1)
      userData.forEach(element => {
        console.log(element)
      });
      loadRegisterBtns();
    })
    btns[1].addEventListener('click', () => {
      askField.classList.remove('shown');
    })
  })
}