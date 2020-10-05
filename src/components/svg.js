import React from 'react'

export const Svg = ({ symbol, width, height, children }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={
        symbol === 'KMD' || symbol === 'MATIC' ? '0 0 96 96' : '0 0 32 32'
      }
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
}
