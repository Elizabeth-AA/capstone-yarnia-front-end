import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import User from '@pages/User'
import Projects from '@pages/Projects'
import AuthTabs from './components/AuthTabs'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AuthTabs />} />
        <Route path='/stash' element={<User />} />
        <Route path='/yarn/:rav_id' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App