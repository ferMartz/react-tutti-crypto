import React from 'react'
import Icon from 'react-tutti-crypto'
import Manifest from './manifest.json'


const App = () => {
  // console.log(Yo)
  return <>
  <Icon symbol='EMC2' color= '#0000FF' width='64' height='64' />
  {/* {
    Manifest.map(i=>{
      var s = i.symbol
      return (
        <div style={{display:'inline-block', margin: '3%'}}>
        <div>
        <Icon name={s} symbo={s} color={'#222'} width={'64'} height={'64'}  />
        </div>
        <div>
        {i.name}
        </div>
        
        </div>
      )
    })
  } */}
  
 
  </>
}

export default App
