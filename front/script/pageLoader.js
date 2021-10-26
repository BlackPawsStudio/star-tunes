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
      let found = false;
      if (popupInput[0].value && popupInput[1].value) {
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
          const user = {name: popupInput[0].value, password: popupInput[1].value, rating: 0, marked: [], songs: [], pfp: 0}
          userData.push(user)
          popupCont.style.opacity = 0;
          popupCont.style.visibility = 'hidden'
          currUser = user;
          loadProfileBtns(currUser)
        }
      }
    }
    else {
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
          currUser = found;
          loadProfileBtns(currUser)
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

const loadProfileBtns = (user) => {
  regeisterBtns.innerHTML = '';
  regeisterBtns.innerHTML = fillProfile(user.name);
  enableUserBtns(user);
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
  document.removeEventListener('keydown', callback, false)
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

const loadProfile = (user) => {
  self.location.href = '#profile';
  aside.classList.remove('slide');
  main.innerHTML = '';
  main.innerHTML += getProfile(user);
  enableChat(user);
  enableProfile(user);
}