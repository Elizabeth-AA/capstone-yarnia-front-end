import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import About from '@pages/About'
import User from '@pages/User'
import Projects from '@pages/Projects'
import Landing from '@pages/Landing'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/users' element={<User />} />
        <Route path='/yarn/:rav_id' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App