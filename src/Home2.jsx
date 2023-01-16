import React from 'react'
import {useSelector } from 'react-redux'

const Home2 = () => {
    const {value} = useSelector(
        state => state.custom
    )

  return (
    <div>
        <p>{value}</p>
    </div>
  )
}

export default Home2