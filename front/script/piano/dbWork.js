const getFrequencyByNote = (note) => {
  const freq = soundData.flat().find((el) => {if (el.note === note) {return el}})
  return freq.freq
} 
const getFrequencyByKey = (key) => {
  try {
    const freq = soundData.flat().find((el) => {if (el.key === key.toLowerCase()) return el})
    return freq.freq
  }
  catch {
    return false
  }
}