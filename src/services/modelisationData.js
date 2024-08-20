export function convertToNbrDay(date) {
  const convertDate = new Date(date)
  const day = convertDate.getDate()
  return day
}

export function convertToStrDay(date) {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const strDays = daysOfWeek[date - 1]
  return strDays
}

export function translateToFR(word) {
  const dict = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité'
  }
  return dict[word] || word
}

export function convertToKCal(calorie) {
  if (calorie > 1000) {
    const srtCal = calorie.toString()
    return srtCal.charAt(0) + ',' + srtCal.slice(1, srtCal.length)
  } else {
    return calorie
  }
}

export function convertToPercent(score) {
  let nbr = score
  let percent = nbr * 100
  return percent + '%'
}
