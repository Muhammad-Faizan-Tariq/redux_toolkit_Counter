import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
  const counter = useSelector((state)=>state.counter.count)
  return (
    <div className='value'>Coin: {counter}</div>
  )
}

export default Coin