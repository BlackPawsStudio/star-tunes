const insertTile = (color) => {
  let res = ``;
  const range = color ? 7 : 6;
  for (let i = 0; i < range; i++) {
    res += color?
    `<div class="w-tile tile">${soundData[0].notes[0][i].note}</div>`:
    `<div class="b-tile tile">${soundData[0].notes[1][i].note}</div>`;
  }
  return res;
}

const fillLoginRegister = () => `
<button class="header-btn">LOG IN</button>
<button class="header-btn">SIGN IN</button>
`

const fillOctaves = () => {
  let res = '';
  for (let i = 0; i < soundData.length; i++) {
    if (i === 3) {
      res += `
      <option value="${i}" selected>${soundData[i].name}</option>
      `
    }
    else {
      res += `
      <option value="${i}">${soundData[i].name}</option>
      `
    }
  }
  return res
}

const fillWaves = () => {
  let res = '';
  for (let i = 0; i < waveData.length; i++) {
    res += `
    <option value="${i}">${waveData[i]}</option>
    `
  }
  return res
}

const fillColors = () => {
  let res = '';
  for (let i = 0; i < colorData.length; i++) {
    res += `
    <option value="${i}">${colorData[i].name}</option>
    `
  }
  return res
}

const getPianoSettings = () => `
<div class="piano-setup">
  <label>Instrument settings</label>
  <div class="setup-content">
    <div class="setup-block">
      <label>Instrument presets</label>
      <select class="setup-select">
        <option value="0">Synthezator</option>
        <option value="1">Classic piano</option>
        <option value="2">Dudka ebat'</option>
      </select>
    </div>  
    <div class="setup-block">
      <label>Wave type</label>
      <select class="setup-select">
        ${fillWaves()}
      </select>
    </div>  
    <div class="setup-block">
      <label>Octaves</label>
      <select class="setup-select">
        ${fillOctaves()}
      </select>
    </div>  
    <div class="setup-block">
      <label>Volume</label>
      <input type="range" id="volume" min="0" max="100" value="50">
    </div>
  </div>
  <img src="assets/img/info-triangle.svg">
  </div>
  <div class="piano-setup" id="color-setup">
  <label>Color settings</label>
    <div class="setup-content">
      <div class="setup-block">
        <label>Color presets</label>
        <select class="setup-select" onInput="applyTheme(this.value)">
          ${fillColors()}
        </select>
      </div>  
      <div class="color-block">
        <label>Piano background</label>
        <input type="color" value="#294F4E" class="setup-color" onInput="pianoBackChange(this.value)">
      </div>
      <div class="color-block">
        <label>Keys background</label>
        <input type="color" value="#D6C1A9" class="setup-color" onInput="pianoTilesChange(this.value)">
      </div>
    </div>
  <img src="assets/img/info-triangle.svg">
</div>
`

const getPiano = () => `
<div id="piano">
  <div id="piano-w">
    ${insertTile(true)}
  </div>
  <div id="piano-b">
    ${insertTile(false)}
  </div>
</div>
`

const renderFrame = () => `
  <div id="songs-list"></div>
`

const getTop = (topData) => `<ul id="top">${getTopSongs(topData)}</ul>`;

const getMark = (mark) => {
  let ret = '';
  for (let i = 0; i < mark; i++) {
    ret += '☆';
  }
  return ret
}

const getTopSongs = (topData) => {
  ret = ``;
  topData.forEach(el => {
    ret += `
    <li class="top-song">
      <label class="top-position">${el.position}</label>
      <div class="song">
        <div class="player">
          <button class="play-button">
            <div class="play-button-back"></div>
            <div class="play-button-front"></div> 
          </button>
          <div class="play-data">
            <label class="song-name">${el.name}</label>
            <div class="play-line"></div>
          </div>
        </div>
      </div>
      <div class="song-info-alt">
        <p class="alt-text">info</p>
        <div class="song-info">
          <label class="song-info-author">${el.author}</label>
          <p class="song-info-line"></p>
          <div class="song-info-mark">${getMark(el.mark)}</div>
        </div>
      </div>
    </li>
  `
  });
  return ret;
}

const fillPopup = (firstTime) => {
  return `
  <div id="popup-sakura"></div>
  <div id="popup-mountains"></div>
    <form id="popup-frames" onsubmit="event.preventDefault()">
    <label>${firstTime?'Registration':'Authorization'}</label>
    <input class="popup-input" type="text" placeholder="Name here" autocomplete="false" required>
    <input class="popup-input" type="password" placeholder="Password" autocomplete="false" required>
    <div id="popup-btns">
      <button class="popup-btn" type="submit">Submit</button>
      <button class="popup-btn" type="submit">Cancel</button>
    </div>
  </form>
  `
}

const fillProfile = (username) => `
<div id="profile">
  <button class="header-btn">
  ${
    (username.length > 10)?
      username.split('').slice(0, 9).join('')+'...':
      username}
  </button>
  <div id="profile-content">
    <button class="profile-btn">Enter profile</button>
    <button class="profile-btn">Log out</button>
    <button class="profile-btn">Delete user</button>
  </div>
</div>
`

////////////////////////////////////////////////////////////////////////////
const fillMarked = (user) => {
  let ret = '';
  for (let i = 0; i < user.marked.length; i++) {
    ret += `
    <li class="marked-song">
      <label class="top-position">0</label>
      <label class="marked-name">Cringe song</label>
      <div class="song-info-alt">
        <p class="alt-text">info</p>
        <div class="song-info">
          <label class="song-info-author">username</label>
          <p class="song-info-line"></p>
          <div class="song-info-mark">☆</div>
        </div>
      </div>
    </li>
    `
  }
  return ret;
}

const fillUserSongs = (user) => {
  let ret = '';
  for (let i = 0; i < user.songs.length; i++) {
    ret += `
    <li class="top-song">
      <label class="top-position">0</label>
      <div class="song">
        <div class="player">
          <button class="play-button">
            <div class="play-button-back"></div>
            <div class="play-button-front"></div> 
          </button>
          <div class="play-data">
            <label class="song-name">This life is cringe...</label>
            <div class="play-line"></div>
          </div>
        </div>
      </div>
      <div class="song-info-alt">
        <p class="alt-text">info</p>
        <div class="song-info">
          <label class="song-info-author">username</label>
          <p class="song-info-line"></p>
          <div class="song-info-mark">☆</div>
        </div>
      </div>
    </li>
    `
  }
  return ret
}

const getProfile = (user) => `
<div id="profile-section">
  <div id="profile-window">
    <div id="profile-avatar"></div>
    <label id="profile-name">${user.name}</label>
    <label class="profile-info">${user.rating} in rating</label>
    <label class="profile-info">${user.songs.length} songs</label>
    <button class="profile-sec-btn">Start creating</button>
    <button class="profile-sec-btn">Upload your song</button>
  </div>
  
  <div id="profile-marked">
    <ul id="marked">
      ${fillMarked(user)?fillMarked(user):'You haven\'t marked anything yet'}
    </ul>
  </div>
</div>
<div id="songs-list">
  <ul id="user-songs">
    ${fillUserSongs(user)?fillUserSongs(user):'You haven\'t got any songs yet'}
  </ul>
</div>
<div id="chat">
  <div id="chat-head">4000 online</div>
  <div id="chat-messages-scroller">
    <div id="chat-messages">
      <div class="message">
        <label class="message-user">Chel:</label>
        <label class="message-text">Yo wassup</label>
        <div class="message-point"></div>
      </div>
      <div class="your message">
        <label class="message-user">You:</label>
        <label class="message-text">Life is cringe...</label>
        <div class="message-point"></div>
      </div>
      <div class="message">
        <label class="message-user">aboba:</label>
        <label class="message-text">Слышь ты говно собачье дерьмо вонючее, а ну что решил на меня лезть</label>
        <div class="message-point"></div>
      </div>
    </div>
  </div>
  <div id="chat-input">
    <input id="chat-text-field" placeholder="Enter message...">
    <button id="chat-send"></button>
  </div>
  <input>
</div>
`