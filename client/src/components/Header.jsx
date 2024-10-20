/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PCCOE Student Dashboard</h1>
        <nav>
          <Link to="/dashboard">
            <button className="text-white">Dashboard</button>
          </Link>
          <Link to="/alumni-directory">
            <button className="text-white">Alumni Directory</button>
          </Link>
          <Link to="/events">
            <button className="text-white">Events</button>
          </Link>
          <Link to="/career-resources">
            <button className="text-white">Career Resources</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header