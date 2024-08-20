import React, { PureComponent } from 'react'

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts'

export class SimpleRadialBarChart extends PureComponent {
  render() {
    const { user } = this.props

    const items = [
      { id: 1, todayScore: user.todayScore * 100, fill: '#E60000' },
      { id: 2, todayScore: 100, opacity: 0 }
    ]

    const renderLegend = () => {
      return (
        <div className='containerScore'>
          <p className='resultScore'>{user.todayScore}</p>

          <span className='descriptionScore'>de votre <br /> objectif</span>
        </div>
      )
    }

    return (
      <div>
        <h1 className='titleRadialBarChart'>Score</h1>

        <ResponsiveContainer height='100%' width='100%'>
          <RadialBarChart
            width={250}
            height={200}
            innerRadius={70}
            outerRadius={90}
            data={items}
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
        </ResponsiveContainer>
      </div>
    )
  }
}
