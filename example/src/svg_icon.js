import React from 'react'


const Svg = ({vb,width,height,children}) => {
    return <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={vb}
            width={width}
            height={height}
            >
            {children}
            </svg> 
}
const Path = ({fillRule,fill,d}) => {
    return <path
    fillRule={fillRule}
    fill={fill}
    d={d}
    />
}
export default function(){
//     let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
// svg.setAttribute("class", "octicon octicon-star")
// svg.setAttribute("viewBox", "0 0 14 16")
// svg.setAttribute("version", "1.1")
// svg.setAttribute("width", "24")
// svg.setAttribute("height", "16")
// svg.setAttribute("aria-hidden", "true")

// let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
// path.setAttribute("fill-rule", "evenodd")
// path.setAttribute("d",
//     "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14")

// svg.appendChild(path)
// console.log(svg)
return <Svg vb="0 0 32 32" width="64" height="64">
<Path fillRule="" fill="#222" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.065-28C9.342 4.001 4 9.347 4 15.94c.001 6.592 5.347 11.936 11.94 11.935 6.592-.002 11.936-5.347 11.935-11.94A11.937 11.937 0 0015.935 4zm-4.847 5.23a.123.123 0 01.125-.12h4.973a6.98 6.98 0 013.027.628c.18.088.357.186.528.292l-3.237 1.853h-1.689a.123.123 0 00-.12.126v.932l-3.607 2.086V9.23zM9.749 19.708l-2.162-2.184 7.12-4.108v2.662a.123.123 0 00.125.12h1.017l-6.093 3.51h-.007zm10.662-2.03c-1.044.872-2.477 1.308-4.299 1.308h-1.297a.123.123 0 00-.123.123v2.688l-1.81 1.042-1.69.977-.107.06v-4.455l5.603-3.224a2.056 2.056 0 001.297-.513 1.74 1.74 0 00.318-.432l3.578-2.071c.06.328.09.66.089.994.004 1.463-.516 2.63-1.56 3.503zm-1.92-3.019c.024-.153.036-.309.037-.464a2.417 2.417 0 00-.563-1.674A1.823 1.823 0 0017.15 12l4.973-2.871 2.182 2.183-5.814 3.347z">

</Path>
</Svg>
}