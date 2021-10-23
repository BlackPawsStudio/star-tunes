const getFrequencyByNote = (note) => {
  const freq = soundData[select[2].value].notes.flat().find((el) => {if (el.note === note) {return el}})
  return freq.freq
} 
const getFrequencyByKey = (keyCode) => {
  try {
    const freq = soundData[select[2].value].notes.flat().find((el) => {if (el.keyCode === keyCode) return el})
    return [freq.freq, freq.note]
  }
  catch {
    return false
  }
}