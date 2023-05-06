import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import LogIn from '@pages/LogIn'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App