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

export default function ({ name, symbol, color, size }) {
  const s = symbol.toUpperCase()
  if (Fruity[s] === undefined) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height={size}
        viewBox='0 0 32 32'
        width={size}
      >
        <g fill='none' fillRule='evenodd'>
          <circle cx='16' cy='16' fill='#efb914' fillRule='nonzero' r='16' />
          <path
            d='M21.002 9.855A7.947 7.947 0 0124 15.278l-2.847-.708a5.357 5.357 0 00-3.86-3.667c-2.866-.713-5.76.991-6.465 3.806s1.05 5.675 3.917 6.388a5.373 5.373 0 005.134-1.43l2.847.707a7.974 7.974 0 01-5.2 3.385L16.716 27l-2.596-.645.644-2.575a8.28 8.28 0 01-1.298-.323l-.643 2.575-2.596-.646.81-3.241c-2.378-1.875-3.575-4.996-2.804-8.081s3.297-5.281 6.28-5.823L15.323 5l2.596.645-.644 2.575a8.28 8.28 0 011.298.323l.643-2.575 2.596.646z'
            fill='#fff'
          />
        </g>
      </svg>
    )
  } else {
    const d = Fruity[s].d
    const b = Fruity[s].blueprint
    color === '' || color === undefined
      ? (color = Fruity[s].color)
      : (color = color)

    return (
      <Svg symbol={s} width={size} height={size}>
        {b.map((i, x) => {
          let fr = d[x].fillRule === undefined ? '' : d[x].fillRule
          let fo = d[x].fillOpacity === undefined ? '' : d[x].fillOpacity
          let o = d[x].opacity === undefined ? '' : d[x].opacity

          if (typeof i === 'string') {
            {
              /* console.log('type of', typeof i) */
            }
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
            {
              /* console.log('type of', typeof i, counter, d[counter].fillRule) */
            }
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
                    {
                      /* console.log('type of', typeof item, counter) */
                    }
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
                    {
                      /* console.log('type of', typeof item, counter) */
                    }
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
                            {
                              /* console.log('type of', typeof n, counter) */
                            }
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
                            {
                              /* console.log('type of', typeof n, counter) */
                            }
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
}
