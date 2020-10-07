import React from 'react'
import Icon from 'react-tutti-crypto'
import Manifest from './manifest.json'


const App = () => {
  // console.log(Yo)
  const size = "100"
  return <>
  {/* <Icon symbol='EMC2' color= '#0000FF' width='64' height='64' /> */}
  {
    Manifest.map((i,k)=>{
      var s = i.symbol
      return (
        <div style={{display:'inline-block', margin: '3%'}} key={k}>
        <div>
        <Icon name={s} symbol={s} color={i.color} width={size} height={size}  />
        </div>
        <div>
        {i.name}
        </div>
        
        </div>
      )
    })
  }
  
 
  </>
}

export default App
