import React from 'react'

export const Group = ({children,blueprint,d}) => {
    let arr = blueprint.shift()
    return <g fillRule={d[0].fillRule}>
        { 
            arr.map((i,x)=>{
                return ""
            })
        }
    </g>
}