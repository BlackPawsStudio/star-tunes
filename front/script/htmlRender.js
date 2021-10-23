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
</div>`

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
          <div class="play-button">
            <div class="play-button-back">
              <div class="play-button-front"></div> 
            </div>
          </div>
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
  <div id="popup-frames">
    <label>${firstTime?'Registration':'Authorization'}</label>
    <input class="popup-input" type="text" placeholder="Name here" autocomplete="false">
    <input class="popup-input" type="password" placeholder="Password" autocomplete="false">
    <div id="popup-btns">
      <button class="popup-btn">Submit</button>
      <button class="popup-btn">Cancel</button>
    </div>
  </div>
  `
}