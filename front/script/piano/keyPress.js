const pianoKeysPressed = [];

const callback = (e, audioContext) => {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sawtooth'
  oscillator.connect(audioContext.destination);
  const tiles = document.getElementsByClassName('tile')
  if (getFrequencyByKey(e.keyCode)) {
    const note = getFrequencyByKey(e.keyCode);
    oscillator.frequency.setValueAtTime(note[0], 0);
    let tilePressed;
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].innerHTML === note[1]) {
        tilePressed = tiles[i]
      };
    }
    tilePressed.classList.add('tile-pressed');
      oscillator.start();
    document.addEventListener('keyup', () => {
      pianoKeysPressed.splice(pianoKeysPressed.indexOf(e.keyCode), 1);
      document.removeEventListener('keydown', callback, false)
      tilePressed.classList.remove('tile-pressed');
      oscillator.stop(audioContext.currentTime + 0.03);
    })
  }
}

const enableKeyPlay = () => {
  const audioContext = new AudioContext();
  document.addEventListener('keydown', e => { 
    if (pianoKeysPressed.includes(e.keyCode) === false) {
      callback(e, audioContext)
      pianoKeysPressed.push(e.keyCode)
    }
  }) 
}
enableKeyPlay()