const insertTile = (color) => {
  let res = ``;
  const range = color ? 7 : 6;
  for (let i = 0; i < range; i++) {
    res += color?
    `<div class="w-tile tile">${soundData[0][i].note}</div>`:
    `<div class="b-tile tile">${soundData[1][i].note}</div>`;
  }
  return res;
}

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
            <button class="play-button-back">
              <div class="play-button-front"></div>
            </button>
          </div>
          <div class="play-data">
            <label class="song-name">${el.name}</label>
            <div class="play-line"></div>
          </div>
        </div>
      </div>
      <div class="song-info">
        <label>${el.author}</label>
        <p class="song-info-line"></p>
        <div>${getMark(el.mark)}</div>
      </div>
    </li>
  `
  });
  return ret;
}