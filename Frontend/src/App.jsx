import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Layout from './Pages/Layout'
import ResumeBuilder from './Pages/ResumeBuilder'
import Preview from './Pages/Preview'
import Features from './Components/Home/Features'

const App = () => {
  return (
    < >
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path='/app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' index element={<ResumeBuilder />} />
        </Route>

        <Route path='/view/:resumeId' element={<Preview />} />

      </Routes >

    </>
  )
}

export default App