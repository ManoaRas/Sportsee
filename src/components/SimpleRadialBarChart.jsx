import React, { PureComponent } from 'react'

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts'

import { convertToPercent } from '../services/modelisationData'

export class SimpleRadialBarChart extends PureComponent {
  render() {
    const { user } = this.props

    const items = [
      { id: 1, todayScore: (user.score ?? user.todayScore) * 100, fill: '#E60000' },
      { id: 2, todayScore: 100, opacity: 0 }
    ]

    const renderLegend = () => {
      return (
        <>
          <p className='radial-chart__score'>
            {convertToPercent(user.score ?? user.todayScore)}
          </p>

          <span>de votre <br /> objectif</span>
        </>
      )
    }

    return (
      <div className='charts radial-chart'>
        <p className='radial-chart__desc'>Score</p>

        <ResponsiveContainer height='100%' width='100%'>
          <RadialBarChart data={items} innerRadius={70} outerRadius={90} startAngle={90} endAngle={450}>
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
        </ResponsiveContainer>
      </div>
    )
  }
}
