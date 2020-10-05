import React from 'react'
import Fruity from './fruity.json'


const Icon = ({props}) => {
    const name = props.name
    const symbol = props.symbol
    const color = props.color
    const width = props.width
    const height = props.height
    const d = Fruity[symbol].d
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    >
    <path
    d={d}
    fill={color}
    ></path>
    </svg>
}

export default Icon