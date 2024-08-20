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
  const [data, setData] = useState({
    userInfos: null,
    activityInfos: null,
    averageSessionsInfos: null,
    performanceInfos: null,
  })

  const userId = 12

  const fetchData = async () => {
    try {
      const [userData, activityData, averageSessionsData, performanceData] = await Promise.all([
        getUser(userId),
        getActivity(userId),
        getAverageSessions(userId),
        getPerformance(userId)
      ])

      setData({
        userInfos: userData,
        activityInfos: activityData,
        averageSessionsInfos: averageSessionsData,
        performanceInfos: performanceData
      })
    } catch (err) {
      alert('Une erreur est survenue lors du chargement de données !')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data.userInfos) return <p>Loading...</p>

  const { userInfos, activityInfos, averageSessionsInfos, performanceInfos } = data
  const { firstName } = userInfos.data.userInfos
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userInfos.data.keyData

  const statsCards = [
    { data: `${calorieCount}kCal`, icon: 'fire', img: fire, name: 'Calories' },
    { data: `${proteinCount}g`, icon: 'chicken', img: chicken, name: 'Protéines' },
    { data: `${carbohydrateCount}g`, icon: 'apple', img: apple, name: 'Glucides' },
    { data: `${lipidCount}g`, icon: 'burger', img: burger, name: 'Lipides' },
  ]

  return (
    <section>
      <div className='home'>
        <h1 className='home--title'>
          Bonjour
          <span className='home--title__name'>{firstName}</span>
        </h1>

        <p className='home--subtitle'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='home--infos'>
          <article className='home--infos--left'>
            {activityInfos && (<SimpleBarChart activity={activityInfos} />)}

            <div className='charts'>
              {averageSessionsInfos && (<TinyLineChart averageSessions={averageSessionsInfos} />)}

              {performanceInfos && (<SimpleRadarChart performance={performanceInfos} />)}

              <ScoreRadialBarChart user={userInfos} />
            </div>
          </article>

          <article className='home--infos--right'>
            {statsCards.map((card, index) => (
              <StatsCard
                key={index}
                data={card.data}
                icon={card.icon}
                img={card.img}
                name={card.name}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}
