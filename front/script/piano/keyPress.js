const pianoKeysPressed = [];

const callback = (e, audioContext) => {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'triangle'
  oscillator.connect(audioContext.destination);
  const tiles = document.getElementsByClassName('tile')
  if (getFrequencyByKey(e.key)) {
    const note = getFrequencyByKey(e.key);
    oscillator.frequency.setValueAtTime(note[0], 0);
    let tilePressed;
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].innerHTML === note[1]) {
        tilePressed = tiles[i]
      };
    }
    tilePressed.classList.add('tile-pressed');
      // pianoKeysPressed.forEach(el => {
      //   if (el.key === e) {
      //     el. = true
      //   }
      // });
      oscillator.start();
    document.addEventListener('keyup', () => {
      pianoKeysPressed.splice(pianoKeysPressed.indexOf(e.key), 1);
      document.removeEventListener('keydown', callback, false)
      tilePressed.classList.remove('tile-pressed');
      oscillator.stop(audioContext.currentTime + 0.03);
    })
  }
}

const enableKeyPlay = () => {
  const audioContext = new AudioContext();
  document.addEventListener('keydown', e => { 
    if (pianoKeysPressed.includes(e.key) === false) {
      callback(e, audioContext)
      pianoKeysPressed.push(e.key)
    }
  }) 
}
enableKeyPlay()