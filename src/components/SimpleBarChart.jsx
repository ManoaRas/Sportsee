import React, { PureComponent } from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { convertToNbrDay } from '../services/modelisationData'

export class SimpleBarChart extends PureComponent {
  render() {
    const { activity } = this.props
    const items = activity.sessions.map((item) => {
      return {
        ...item,
        day: convertToNbrDay(item.day)
      }
    })

    const CustomTooltip = (data) => {
      try {
        let kg = data.payload[0]['value']
        let kCal = data.payload[1]['value']

        return (
          <div className='bar-chart--tooltip'>
            <p>{`${kg}kg`}</p>
            <p>{`${kCal}kCal`}</p>
          </div>
        )
      } catch (err) {
        return null
      }
    }

    return (
      <div className='bar-chart'>
        <p className='bar-chart__text'>Activité quotidienne</p>

        <ResponsiveContainer background-color='#E60000' height='100%' width='100%'>
          <BarChart data={items} barCategoryGap={20} barGap={10} barSize={10}>
            <CartesianGrid strokeDasharray='2 2' horizontal={false} vertical={false} />

            <XAxis dataKey='day' axisLine={false} tickLine={false} />

            <YAxis orientation='right' axisLine={false} tickLine={false} />

            <Tooltip
              offset={40}
              content={CustomTooltip}
              formatter={(value, name) => [`${value} ${name}`]}
              labelFormatter={() => ``}
              contentStyle={{  }}
              itemStyle={{ color: 'white' }}
            />

            <Legend
              align='right'
              dataKey='calories'
              height={36}
              iconType='circle'
              verticalAlign='top'
            />

            <Bar
              dataKey='kilogram'
              fill='#282D30'
              name='Poids(kg)'
              radius={[50, 50, 0, 0]}
            />

            <Bar
              dataKey='calories'
              fill='#E60000'
              name='Calories brûlées (kCal)'
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
