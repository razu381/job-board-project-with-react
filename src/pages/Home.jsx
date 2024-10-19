import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import AllJobBtn from '../components/AllJobBtn'


function Home() {
  return (
    <div>
      <Hero title = "Become a React Dev" subtitle = "Find the React job that fits your skill set" /> 
      <HomeCards />         
      <JobListings/>
      <AllJobBtn />         
    </div>
  )
}

export default Home
