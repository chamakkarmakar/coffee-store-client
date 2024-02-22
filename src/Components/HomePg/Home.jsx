import React from 'react'
import NavBar from '../CommonSection/NavBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Home
