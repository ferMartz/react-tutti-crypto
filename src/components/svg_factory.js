import React from 'react'

const Svg = ({ symbol, width, height, children }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={
        symbol === 'KMD' || symbol === 'MATIC'?
        "0 0 96 96" : "0 0 32 32"
      }
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
}
const Path = ({ fillRule, fill, d }) => {
  return <path fillRule={fillRule} fill={fill} d={d} />
}
export default function ({ props }) {
  const viewBox = props.viewBox
  const name = props.name
  const symbol = props.symbol
  const color = props.color
  const width = props.width
  const height = props.height
  const fl = props.fillRule
  const d = props.d
  return (
    <Svg viewBox={viewBox} width={width} height={height}>
      <Path fillRule={fl} fill={color} d={d}></Path>
    </Svg>
  )
}
