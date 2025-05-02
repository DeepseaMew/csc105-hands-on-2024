import React from 'react'
import Navbar from '../components/Navbar.jsx'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-200 ">
      <Navbar/>
      <p className="text-4xl flex items-center justify-center">Welcome to the Home Page.</p>
    </div>
  )
}

export default HomePage
