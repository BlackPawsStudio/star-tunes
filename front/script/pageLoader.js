const main = document.querySelector('main');
const regeisterBtns = document.getElementById('register-btns')

const loadRegisterBtns = () => {
  regeisterBtns.innerHTML = '';
  regeisterBtns.innerHTML = fillLoginRegister();
  const logIn = document.getElementsByClassName('header-btn')[0];
  const signIn = document.getElementsByClassName('header-btn')[1];

  signIn.addEventListener('click', () => {
    loadPopup(true);
  })
  logIn.addEventListener('click', () => {
    loadPopup(false);
  })
}

const loadPopup = (firstTime) => {
  const popup = document.getElementById('popup');
  const popupCont = document.getElementById('popup-container');
  const popupInput = document.getElementsByClassName('popup-input');

  popupCont.style.opacity = 100;
  popupCont.style.visibility = 'visible'
  popup.innerHTML = '';
  popup.innerHTML = fillPopup(firstTime);
  
  const submit = document.getElementsByClassName("popup-btn")[0];
  const cancel = document.getElementsByClassName("popup-btn")[1];
  submit.addEventListener('click', () => {
    if (firstTime) {
      console.log('aboba')
      let found = false;
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].name === popupInput[0].value) {
          found = true
        }
      };
      if (found) {
        popupInput[0].value = ''
        popupInput[0].placeholder = 'This username is taken'
      }
      else { 
        userData.push({name: popupInput[0].value, password: popupInput[1].value})
        popupCont.style.opacity = 0;
        popupCont.style.visibility = 'hidden'
        loadProfileBtns(popupInput[0].value)
      }
    }
    else {
      console.log('bebra')
      let found = null;
      for (let i = 0; i < userData.length; i++) {
        if (popupInput[0].value && popupInput[1].value) {
          if (userData[i].name == popupInput[0].value) {
            found = userData[i];
          }
        }
      }
      if (found) {
        if (found.password === popupInput[1].value) {
          loadProfileBtns(found.name)
          popupCont.style.opacity = 0;
          popupCont.style.visibility = 'hidden'
        }
        else {
          popupInput[1].value = ''
          popupInput[1].placeholder = 'Wrong password'
        }
      }
      else { 
        popupInput[0].value = ''
        popupInput[0].placeholder = 'No such user'
      }
    }
  })
  
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

const loadProfileBtns = (username) => {
  regeisterBtns.innerHTML = '';
  regeisterBtns.innerHTML = fillProfile(username);
  enableUserBtns(username);
}

const loadPiano = () => {
  self.location.href = '#piano';
  aside.classList.remove('slide');
  main.innerHTML = getPianoSettings();
  main.innerHTML += getPiano();
  enablePiano()
  enableKeyPlay()
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
