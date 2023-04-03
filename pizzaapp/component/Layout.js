import React, {useEffect, useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
        <Navbar/>
        {isClient && children}
        <Footer/>
    </>
  )
}

export default Layout
