/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import AlumniList from '../components/Dashboard/Student/AlumniList'
import CareerStatsChart from '../components/Dashboard/Student/CareerStatsChart'
import UpcomingEventsList from '../components/Dashboard/Student/UpcomingEventsList'
import MentorshipList from '../components/Dashboard/Student/MentorshipList'
import QuickLinks from '../components/Dashboard/Student/QuickLinks'

// Assume these services are implemented
import { getTopAlumni, getCareerStats, getUpcomingEvents, getMentorshipOpportunities } from '../services/studentService'
import { Widgets } from '@mui/icons-material'

export default function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [topAlumni, setTopAlumni] = useState([])
  const [careerStats, setCareerStats] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [mentorshipOpportunities, setMentorshipOpportunities] = useState([])

  useEffect(() => {
    // Load data using the service functions
    setTopAlumni(getTopAlumni())
    setCareerStats(getCareerStats())
    setUpcomingEvents(getUpcomingEvents())
    setMentorshipOpportunities(getMentorshipOpportunities())
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    // Optional: Add logic to filter the alumni list based on search term
  }

  return (
    <div>
      <Header />
      <main className="container" style={{ width: '100%' }}>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AlumniList alumni={topAlumni} searchTerm={searchTerm} />
          <CareerStatsChart careerStats={careerStats} />
          <UpcomingEventsList upcomingEvents={upcomingEvents} />
          <MentorshipList mentorshipOpportunities={mentorshipOpportunities} />
        </div>
        <div className="mt-6">
          <QuickLinks />
        </div>
      </main>
    </div>
  )
}
