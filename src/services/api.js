import axios from 'axios'
import activity from '../mocks/activity.json'
import averageSessions from '../mocks/averageSessions.json'
import mainData from '../mocks/mainData.json'
import performance from '../mocks/performance.json'

const BASE_URL = 'http://localhost:3000/user'
const isMock = false

const mockData = {
  getUser: mainData,
  getActivity: activity,
  getAverageSessions: averageSessions,
  getPerformance: performance
}

const apiEndpoints = {
  getUser: (id) => `${BASE_URL}/${id}`,
  getActivity: (id) => `${BASE_URL}/${id}/activity`,
  getAverageSessions: (id) => `${BASE_URL}/${id}/average-sessions`,
  getPerformance: (id) => `${BASE_URL}/${id}/performance`,
}

async function fetchData(key, id) {
  if (isMock) {
    return mockData[key]
  } else {
    const url = apiEndpoints[key](id)
    const resp = await axios.get(url)
    return resp.data
  }
}

export async function getUser(id) {
  return fetchData('getUser', id)
}

export async function getActivity(id) {
  return fetchData('getActivity', id)
}

export async function getAverageSessions(id) {
  return fetchData('getAverageSessions', id)
}

export async function getPerformance(id) {
  return fetchData('getPerformance', id)
}
