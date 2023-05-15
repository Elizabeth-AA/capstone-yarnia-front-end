import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import User from '@pages/User'
import Projects from '@pages/Projects'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users' element={<User />} />
        <Route path='/projects/:rav_id' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App