import React, { PureComponent } from 'react'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'

import { translateToFR } from '../services/modelisationData'

export class SimpleRadarChart extends PureComponent {
  render() {
    const { performance } = this.props
    const { data } = performance

    const items = data.map((item) => {
      const strObj = performance.kind[item.kind]
      return {
        ...item,
        kind: translateToFR(strObj)
      }
    })
    items.reverse()

    return (
      <div className='charts radar-chart'>
        <ResponsiveContainer height='100%' width='100%'>
          <RadarChart cx='50%' cy='50%' outerRadius='65%' data={items}>
            <PolarGrid gridType="polygon" strokeWidth={2} radialLines={false} />
            <PolarAngleAxis
              dataKey='kind'
              stroke='white'
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <Radar
              name='Performances'
              dataKey='value'
              stroke='#FF0101'
              fill='#FF0101'
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
