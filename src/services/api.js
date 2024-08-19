import axios from 'axios'
import activity from '../mocks/activity.json'
import averageSessions from '../mocks/averageSessions.json'
import mainData from '../mocks/mainData.json'
// import performance from '../mocks/performance.json'

const BASE_URL = 'http://localhost:3000/user'
const isMock = false

export async function getUserInfos(id) {
  if (isMock === true) {
    return mainData
  } else {
    return await axios
      .get(`${BASE_URL}/${id}`)
      .then((resp) => resp.data)
  }
}

export async function getActivity(id) {
  if (isMock === true) {
    return activity
  } else {
    return await axios
      .get(`${BASE_URL}/${id}/activity`)
      .then((resp) => resp.data)
  }
}

export async function getAverageSessions(id) {
  if (isMock === true) {
    return averageSessions
  } else {
    return await axios
      .get(`${BASE_URL}/${id}/average-sessions`)
      .then((resp) => resp.data)
  }
}

// export async function getPerformance(id) {
//   if (isMock === true) {
//     return performance
//   } else {
//     return await axios
//       .get(`${BASE_URL}/${id}/performance`)
//       .then((resp) => resp.data)
//   }
// }
