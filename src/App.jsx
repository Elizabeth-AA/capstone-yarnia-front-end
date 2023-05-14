import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import User from '@pages/User'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users' element={<User />} />
      </Routes>
    </>
  )
}

export default App