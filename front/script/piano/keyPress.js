const callback = (e, audioContext) => {
  const oscillator = audioContext.createOscillator();
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
    oscillator.start();
    document.addEventListener('keyup', () => {
      document.removeEventListener('keydown', callback, false)
      tilePressed.classList.remove('tile-pressed');
      oscillator.stop(audioContext.currentTime + 0.09);
    })
  }
}
const enableKeyPlay = () => {
  const audioContext = new AudioContext();
  const gainController = audioContext.createGain();
  gainController.gain.setValueAtTime(0.5, 0);

  document.addEventListener('keydown', e => callback(e, audioContext))
}
enableKeyPlay()