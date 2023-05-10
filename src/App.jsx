import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '@components/Header/Header'
import Stash from '@pages/Stash'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/stash' element={<Stash />} />
      </Routes>
    </>
  )
}

export default App