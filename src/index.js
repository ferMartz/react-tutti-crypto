import React from 'react'
import Fruity from './man.json'

import {
  AGI,
  AION,
  CNX,
  ELA,
  ETC,
  ETH,
  HPB,
  INS,
  KLOWN,
  KMD,
  LEO,
  MAID,
  MATIC,
  PINK,
  REQ,
  SIN,
  WINGS,
  WTC
} from './components/odd_fruit'
import { Svg } from './components/svg'
import { Path } from './components/path'
// import { Group } from './components/group'
// import SvgFactory from './components/svg_factory'

export default function ({ name, symbol, color, width, height }) {

  const d = Fruity[symbol].d
  const b = Fruity[symbol].blueprint

  color === "" ? Fruity[symbol].color : color
  console.log(typeof color)

  return (
    <Svg symbol={symbol} width={width} height={height}>
      {b.map((i, x) => {
        let fr = d[x].fillRule === undefined ? '' : d[x].fillRule
        let fo = d[x].fillOpacity === undefined ? '' : d[x].fillOpacity
        let o = d[x].opacity === undefined ? '' : d[x].opacity

        if (typeof i === 'string') {
          {/* console.log('type of', typeof i) */}
          return (
            <Path
              key={x}
              fillRule={fr}
              fill={color}
              d={d[x].d}
              fillOpacity={fo}
              opacity={o}
            />
          )
        } else {
          let counter = 0
          {/* console.log('type of', typeof i, counter, d[counter].fillRule) */}
          return (
            <g
              fillRule={
                d[counter].fillRule !== undefined ? d[counter].fillRule : ''
              }
              key={x}
            >
              {i.map((item, index) => {
                counter = counter + 1
                if (typeof item === 'string') {
                  {/* console.log('type of', typeof item, counter) */}
                  return (
                    <Path
                      key={counter}
                      fillRule={
                        d[counter].fillRule !== undefined
                          ? d[counter].fillRule
                          : ''
                      }
                      fill={color}
                      d={d[counter].d}
                      fillOpacity={
                        d[counter].fillOpacity !== undefined
                          ? d[counter].fillOpacity
                          : ''
                      }
                      opacity={
                        d[counter].opacity !== undefined
                          ? d[counter].opacity
                          : ''
                      }
                    />
                  )
                } else {
                  {/* console.log('type of', typeof item, counter) */}
                  return (
                    <g
                      fillRule={
                        d[counter].fillRule !== undefined
                          ? d[counter].fillRule
                          : ''
                      }
                      key={`${x}-${index}`}
                    >
                      {item.map((n, t) => {
                        counter = counter + 1
                        if (typeof n === 'string') {
                          {/* console.log('type of', typeof n, counter) */}
                          return (
                            <Path
                              key={counter}
                              fillRule={
                                d[counter].fillRule !== undefined
                                  ? d[counter].fillRule
                                  : ''
                              }
                              fill={color}
                              d={d[counter].d}
                              fillOpacity={
                                d[counter].fillOpacity !== undefined
                                  ? d[counter].fillOpacity
                                  : ''
                              }
                              opacity={
                                d[counter].opacity !== undefined
                                  ? d[counter].opacity
                                  : ''
                              }
                              key={`${x}-${index}-${t}`}
                            />
                          )
                        } else {
                          {/* console.log('type of', typeof n, counter) */}
                        }
                      })}
                    </g>
                  )
                }
              })}
            </g>
          )
        }
      })}
    </Svg>
  )

}
