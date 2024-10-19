/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import AlumniList from '../components/Dashboard/AlumniList'
import CareerStatsChart from '../components/Dashboard/CareerStatsChart'
import UpcomingEventsList from '../components/Dashboard/UpcomingEventsList'
import MentorshipList from '../components/Dashboard/MentorshipList'
import QuickLinks from '../components/Dashboard/QuickLinks'

// Assume these services are implemented
import { getTopAlumni, getCareerStats, getUpcomingEvents, getMentorshipOpportunities } from '../services/studentService'

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
      <main className="container mx-auto px-4 py-6">
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
