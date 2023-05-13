import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from '@pages/Auth/SignUp'
import SignUp from '@pages/Auth/SignUp'
import Stash from '@pages/Stash'
import Projects from '@pages/Projects'

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full space-y-8">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/stash' element={<Stash />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </div>
    </div>
  )
}

export default App