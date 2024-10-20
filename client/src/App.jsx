
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import CollegeDashboard from './pages/CollegeDashboard'

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Student Dashboard */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path= "/College" element={<CollegeDashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
