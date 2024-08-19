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

export class SimpleBarChart extends PureComponent {
  render() {
    const { activity } = this.props
    const items = activity.data.sessions.map((item) => item)

    return (
      <div className=''>
        <p className=''>Activité quotidienne</p>

        <ResponsiveContainer background-color='#E60000' width='100%' height='100%'>
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
              dataKey={'day'}
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
              verticalAlign='top'
              align='right'
              height={36}
              dataKey='calories'
              iconType='circle'
            />

            <Bar
              name='Poids(kg)'
              dataKey='kilogram'
              fill='#282D30'
              radius={[50, 50, 0, 0]}
            />

            <Bar
              name='Calories brûlées (kCal)'
              dataKey='calories'
              fill='#E60000'
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
