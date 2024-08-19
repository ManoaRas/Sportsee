import { useEffect, useState } from 'react'
import {
  getUserInfos,
  // getActivity,
  // getAverageSessions,
  // getPerformance
} from '../services/api'

export function Home() {
  const [userInfos, setUserInfos] = useState(null)
  // const [activityInfos, setActivityInfos] = useState(null)
  // const [averageSessionsInfos, setAverageSessionsInfos] = useState(null)
  // const [performanceInfos, setPerformanceInfos] = useState(null)

  const userId = 12

  const fetchData = async () => {
    try {
      const userData = await getUserInfos(userId)
      // const activityData = await getActivity(activityInfos)
      // const averageSessionsData = await getAverageSessions(averageSessionsInfos)
      // const performanceData = await getPerformance(performanceInfos)

      setUserInfos(userData)
      // setActivityInfos(activityData)
      // setAverageSessionsInfos(averageSessionsData)
      // setPerformanceInfos(performanceData)
    } catch (err) {
      alert('Une erreur est survenue lors du chargement de données !')
    }
  }

  useEffect(() => { fetchData() }, [])

  return (
    <section>
      {userInfos ? (
        <>
          <h1 className=''>
            Bonjour
            <span className=''>{userInfos.data.userInfos.firstName}</span>
          </h1>

          <p className=''>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

          <div className=''>
          </div>

          <div className=''></div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
