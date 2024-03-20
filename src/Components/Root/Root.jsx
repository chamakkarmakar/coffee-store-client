import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import NavBar from '../CommonSection/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../CommonSection/Footer'
import Loading from '../Loading/Loading'

const Root = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
