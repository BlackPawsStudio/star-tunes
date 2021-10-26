const pianoWTiles = document.getElementsByClassName('w-tile')
const pianoBTiles = document.getElementsByClassName('b-tile')
const palette = document.getElementsByClassName('setup-color')

const select = document.getElementsByClassName('setup-select')

const pianoBackChange = (color) => {
  for (let i = 0; i < pianoBTiles.length; i++) {
    pianoBTiles[i].style.background = color
  }
  for (let i = 0; i < pianoWTiles.length; i++) {
    pianoWTiles[i].style.color = color
  }
  piano.style.background = color
}

const pianoTilesChange = (color) => {
  for (let i = 0; i < pianoWTiles.length; i++) {
    pianoWTiles[i].style.background = color
  }
  for (let i = 0; i < pianoBTiles.length; i++) {
    pianoBTiles[i].style.color = color
  }
}

const applyTheme = (data) => {
  
  console.log(data)
  pianoBackChange(colorData[data].piano);
  palette[0].value = colorData[data].piano
  pianoTilesChange(colorData[data].keys);
  palette[1].value = colorData[data].keys
}