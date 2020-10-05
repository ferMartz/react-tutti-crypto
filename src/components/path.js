import React from 'react'

export const Path = ({ fillRule, fill, d, fillOpacity, opacity }) => {
  return <path 
          fillRule={fillRule} 
          fill={fill} 
          d={d} 
          fillOpacity={fillOpacity} 
          opacity={opacity}
          />
}
