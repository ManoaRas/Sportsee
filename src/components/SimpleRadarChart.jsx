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
      <ResponsiveContainer fill='#8884d8' stroke='#8884d8' height='100%' width='100%'>
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='75%'
          width={730}
          height={250}
          data={items}
          fill='#8884d8'
        >
          <PolarGrid strokeWidth={3} radialLines={false} />
          <PolarAngleAxis dataKey='kind' tickLine={false} />
          <Radar
            name='Karl'
            dataKey='value'
            stroke='#E60000'
            fill='#E60000'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
