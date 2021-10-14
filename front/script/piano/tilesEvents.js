const playSound = (e, audioContext, gainController, piano, mouseDown) => {
  e.target.classList.add('tile-pressed')
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.setValueAtTime(getFrequencyByNote(e.target.innerHTML), 0);
  oscillator.connect(gainController);
  oscillator.start();
  document.addEventListener('mouseup', () => {
    mouseDown = false
    oscillator.stop(audioContext.currentTime);
  })
  piano.addEventListener('mouseup', (e) => {
    mouseDown = false;
    oscillator.stop(audioContext.currentTime);
    if(e.target.classList.contains('tile')) {
      e.target.classList.remove('tile-pressed')
    }
  })
  e.target.addEventListener('mouseleave', (e) => {
    mouseDown = false;
    oscillator.stop(audioContext.currentTime);
  })
  piano.addEventListener('mouseleave', (e) => {
    mouseDown = false;
    oscillator.stop(audioContext.currentTime);
    if(e.target.classList.contains('tile')) {
      e.target.classList.remove('tile-hover');
      e.target.classList.remove('tile-pressed')
    }
  })
}
const enablePiano = () => {
  const audioContext = new AudioContext();
  const gainController = audioContext.createGain();
  gainController.gain.setValueAtTime(0.5, 0);
  gainController.connect(audioContext.destination);

  const piano = document.querySelector('#piano');
  let mouseDown = false;

  piano.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('tile')) {
      e.target.classList.add('tile-hover')
      if (mouseDown) {
        playSound(e, audioContext, gainController, piano, mouseDown)
      }
      e.target.addEventListener('mouseleave', (e) => {
        if(e.target.classList.contains('tile')) {
          e.target.classList.remove('tile-hover');
          e.target.classList.remove('tile-pressed')
        }
      })
    }
  })
  piano.addEventListener('mousedown', (e) => {
    mouseDown = true;
    if(e.target.classList.contains('tile')) {
      playSound(e, audioContext, gainController, piano, mouseDown)
    }
  })
  document.addEventListener('mouseup', () => {
    mouseDown = false
  })
  piano.addEventListener('mouseup', (e) => {
    mouseDown = false;
    if(e.target.classList.contains('tile')) {
      e.target.classList.remove('tile-pressed')
    }
  })
  piano.addEventListener('mouseleave', (e) => {
    mouseDown = false;
    if(e.target.classList.contains('tile')) {
      e.target.classList.remove('tile-hover');
      e.target.classList.remove('tile-pressed')
    }
  })
}