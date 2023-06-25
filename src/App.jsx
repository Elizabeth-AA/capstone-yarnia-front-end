import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import Landing from '@pages/Landing'
import Stash from '@pages/Stash'
import Projects from '@pages/Projects'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/user/:userId' element={<Stash />} />
        <Route path='/yarn/:rav_id' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App