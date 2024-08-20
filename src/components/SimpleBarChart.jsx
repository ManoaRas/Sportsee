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

    return (
      <div className=''>
        <p className=''>Activité quotidienne</p>

        <ResponsiveContainer background-color='#E60000' height='100%' width='100%'>
          <BarChart
            width={10}
            height={300}
            data={items}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barCategoryGap={40}
            barGap={8}
          >
            <CartesianGrid strokeDasharray='4 2' vertical={false} />

            <XAxis
              dataKey='day'
              tickLine={false}
              padding={{ right: -25, left: -25 }}
            />

            <YAxis orientation='right' axisLine={false} tickLine={false} />

            <Tooltip
              formatter={(value, name) => [`${value} ${name}`]}
              labelFormatter={() => ``}
              contentStyle={{ backgroundColor: '#E60000', border: '#E60000' }}
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
