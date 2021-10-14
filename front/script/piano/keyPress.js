const callback = (e, audioContext) => {
  const oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  // const tiles = document.getElementsByClassName('tile')
  // const arr = Array.prototype.slice.call(tiles)
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].innerHTML;
  // }
  if (getFrequencyByKey(e.key)) {
    oscillator.frequency.setValueAtTime(getFrequencyByKey(e.key), 0);
    oscillator.start();
    document.addEventListener('keyup', () => {
      document.removeEventListener('keydown', callback, false)
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