// const pianoBack = document.getElementById('piano');
const pianoWTiles = document.getElementsByClassName('w-tile')
const pianoBTiles = document.getElementsByClassName('b-tile')
const palette = document.getElementsByClassName('setup-color')

const select = document.getElementsByClassName('setup-select')

const pianoBackChange = () => {
  for (let i = 0; i < pianoBTiles.length; i++) {
    pianoBTiles[i].style.background = palette[0].value
  }
  for (let i = 0; i < pianoWTiles.length; i++) {
    pianoWTiles[i].style.color = palette[0].value
  }
  piano.style.background = palette[0].value
}

const pianoTilesChange = () => {
  for (let i = 0; i < pianoWTiles.length; i++) {
    pianoWTiles[i].style.background = palette[1].value
  }
  for (let i = 0; i < pianoBTiles.length; i++) {
    pianoBTiles[i].style.color = palette[1].value
  }
}