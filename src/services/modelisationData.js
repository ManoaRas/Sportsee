export function convertToNbrDay(date) {
  const convertDate = new Date(date)
  const day = convertDate.getDate()
  return day
}

export function convertToStrDay(date) {
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
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
