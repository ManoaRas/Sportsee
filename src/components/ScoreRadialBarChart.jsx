import React, { PureComponent } from 'react'

import { RadialBarChart, RadialBar, Legend } from 'recharts'

export class ScoreRadialBarChart extends PureComponent {
  render() {
    const { user } = this.props

    const data = [
      {
        id: 1,
        todayScore: (user.data.score ?? user.data.todayScore) * 100,
        fill: '#E60000'
      },
      { id: 2, todayScore: 100, opacity: 0 }
    ]

    const renderLegend = () => {
      return (
        <div className='containerScore'>
          <p className='resultScore'>
            {user.data.score ?? user.data.todayScore}
          </p>
          <span className='descriptionScore'>
            de votre <br /> objectif
          </span>
        </div>
      )
    }

    return (
      <>
        <h1 className='titleRadialBarChart'>Score</h1>
        <RadialBarChart
          width={250}
          height={200}
          innerRadius={70}
          outerRadius={90}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <Legend
            content={renderLegend}
            layout='vertical'
            align='center'
            verticalAlign='middle'
          />
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey='todayScore'
            cornerRadius='10'
          />
        </RadialBarChart>
      </>
    )
  }
}
