import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' />
      </Routes>
    </>
  )
}

export default App