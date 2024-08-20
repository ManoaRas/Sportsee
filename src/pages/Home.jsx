import React, { useEffect, useState } from 'react'

// IMPORTATION ASSETS ICONS
import apple from '../assets/icons/Carbohydrate.svg'
import burger from '../assets/icons/Lipid.svg'
import chicken from '../assets/icons/Protein.svg'
import fire from '../assets/icons/Calorie.svg'

// IMPORTATION COMPONENTS
import { ScoreRadialBarChart } from '../components/ScoreRadialBarChart'
import { SimpleBarChart } from '../components/SimpleBarChart'
import { SimpleRadarChart } from '../components/SimpleRadarChart'
import { StatsCard } from '../components/StatsCard'
import { TinyLineChart } from '../components/TinyLineChart'

// IMPORTATION SERVICE
import {
  getUser,
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
      const userData = await getUser(userId)
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

                <ScoreRadialBarChart user={userInfos} />
              </div>
            </article>

            <article className='home--infos--right'>
              <div key={userInfos.id}>
                <StatsCard
                  data={userInfos.data.keyData.calorieCount + 'kCal'}
                  icon={'fire'}
                  img={fire}
                  name='Calories'
                />
                <StatsCard
                  data={userInfos.data.keyData.proteinCount + 'g'}
                  icon={'chicken'}
                  img={chicken}
                  name='Glucides'
                />
                <StatsCard
                  data={userInfos.data.keyData.carbohydrateCount + 'g'}
                  icon={'apple'}
                  img={apple}
                  name='Glucides'
                />
                <StatsCard
                  data={userInfos.data.keyData.lipidCount + 'g'}
                  icon={'burger'}
                  img={burger}
                  name='Glucides'
                />
              </div>
            </article>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
