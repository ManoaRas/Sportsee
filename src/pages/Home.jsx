import React, { useEffect, useState } from 'react'

import { SimpleBarChart } from '../components/SimpleBarChart'
import { TinyLineChart } from '../components/TinyLineChart'
import { SimpleRadarChart } from '../components/SimpleRadarChart'

import {
  getUserInfos,
  getActivity,
  getAverageSessions,
  getPerformance
} from '../services/api'

export function Home() {
  const [userInfos, setUserInfos] = useState(null)
  const [activityInfos, setActivityInfos] = useState(null)
  const [averageSessionsInfos, setAverageSessionsInfos] = useState(null)
  const [performanceInfos, setPerformanceInfos] = useState(null)

  const userId = 12

  const fetchData = async () => {
    try {
      const userData = await getUserInfos(userId)
      const activityData = await getActivity(userId)
      const averageSessionsData = await getAverageSessions(userId)
      const performanceData = await getPerformance(userId)

      setUserInfos(userData)
      setActivityInfos(activityData)
      setAverageSessionsInfos(averageSessionsData)
      setPerformanceInfos(performanceData)
    } catch (err) {
      alert('Une erreur est survenue lors du chargement de données !')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      {userInfos ? (
        <div className='home'>
          <h1 className='home--title'>
            Bonjour
            <span className='home--title__name'>
              {userInfos.data.userInfos.firstName}
            </span>
          </h1>

          <p className='home--subtitle'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

          <div className='home--infos'>
            <article className='home--infos--left'>
              {activityInfos && (
                <SimpleBarChart activity={activityInfos} />
              )}

              <div className='charts'>
                {averageSessionsInfos && (
                  <TinyLineChart averageSessions={averageSessionsInfos} />
                )}

                {performanceInfos && (
                  <SimpleRadarChart performance={performanceInfos} />
                )}
              </div>
            </article>

            {/* <article className='home--infos--right'></article> */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
