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
  const fl = Fruity[symbol].fillRule
  const d = Fruity[symbol].d
  const b = Fruity[symbol].blueprint
  // console.log('d', d)
  // console.log('b', b)
  // return <AGI symbol={symbol} width={width} height={height} color={color} />
  return (
    <Svg symbol={symbol} width={width} height={height}>
      {b.map((i, x) => {
        let fr = d[x].fillRule === undefined ? '' : d[x].fillRule
        let fo = d[x].fillOpacity === undefined ? '' : d[x].fillOpacity
        let o = d[x].opacity === undefined ? '' : d[x].opacity

        if (typeof i === 'string') {
          // console.log('type of', typeof i)
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
          // console.log('type of', typeof i, counter, d[counter].fillRule)
          return (
            <g
              fillRule={
                d[counter].fillRule !== undefined ? d[counter].fillRule : ''
              }
              key={counter}
            >
              {i.map((item, index) => {
                counter = counter + 1
                if (typeof item === 'string') {
                  //console.log('type of', typeof item, counter)
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
                  // console.log('type of', typeof item, counter)
                  return (
                    <g
                      fillRule={
                        d[counter].fillRule !== undefined
                          ? d[counter].fillRule
                          : ''
                      }
                      key={counter}
                    >
                      {item.map((n, t) => {
                        counter = counter + 1
                        if (typeof n === 'string') {
                          // console.log('type of', typeof n, counter)
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
                          // console.log('type of', typeof n, counter)
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
  // switch(symbol){
  //     case 'AGI':
  //         return <AGI symbol={symbol} width={width} height={height} color={color} />
  //     case 'AION':
  //         return <AION symbol={symbol} width={width} height={height} color={color} />
  //     case 'CNX':
  //         return <CNX symbol={symbol} width={width} height={height} color={color} />
  //     case 'ELA':
  //         return <ELA symbol={symbol} width={width} height={height} color={color} />
  //     case 'ETC':
  //         return <ETC symbol={symbol} width={width} height={height} color={color} />
  //     case 'ETH':
  //         return <ETH symbol={symbol} width={width} height={height} color={color} />
  //     case 'HPB':
  //         return <HPB symbol={symbol} width={width} height={height} color={color} />
  //     case 'INS':
  //         return <INS symbol={symbol} width={width} height={height} color={color} />
  //     case 'KLOWN':
  //         return <KLOWN symbol={symbol} width={width} height={height} color={color} />
  //     case 'KMD':
  //         return <KMD symbol={symbol} width={width} height={height} color={color} />
  //     case 'LEO':
  //         return <LEO symbol={symbol} width={width} height={height} color={color} />
  //     case 'MAID':
  //         return <MAID symbol={symbol} width={width} height={height} color={color} />
  //     case 'MATIC':
  //         return <MATIC symbol={symbol} width={width} height={height} color={color} />
  //     case 'PINK':
  //         return <PINK symbol={symbol} width={width} height={height} color={color} />
  //     case 'REQ':
  //         return <REQ symbol={symbol} width={width} height={height} color={color} />
  //     case 'SIN':
  //         return <SIN symbol={symbol} width={width} height={height} color={color} />
  //     case 'WINGS':
  //         return <WINGS symbol={symbol} width={width} height={height} color={color} />
  //     case 'WTC':
  //         return <WTC symbol={symbol} width={width} height={height} color={color} />
  //     default:
  //         return <Svg symbol={symbol} width={width} height={height} >
  //                     <Path fillRule={fl} fill={color} d={d} />
  //                 </Svg>
  // }
}
