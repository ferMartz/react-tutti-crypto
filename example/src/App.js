import React from 'react'
import Icon from 'react-tutti-crypto'
import Manifest from './manifest.json'

const App = () => {
  // console.log(Yo)
  const size = '100'
  return (
    <>
      {/* <Icon symbol='EMC2' color= '#0000FF' width='64' height='64' /> */}
      {Manifest.map((i, k) => {
        var s = i.symbol
        return (
          <div key={k} style={{ display: 'inline-block', margin: '3%' }}>
            <div>
              <Icon symbol={s} size={100} />
            </div>
            <div>{i.name}</div>
          </div>
        )
      })}
    </>
  )
}

export default App
