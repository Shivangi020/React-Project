import React from 'react'
import './Tour.css'
import TourCard from './TourCard'

function TourMainPage() {
  return (
    <div className='tour-main-page'>
       <div className='tour-heading'>Our Tours</div>
       <hr className='heading-hr'></hr>
       <div className='tour-cards'>
        <TourCard/>
        <TourCard/>
        <TourCard/>
        <TourCard/>
       </div>
    </div>
 
    
  )
}

export default TourMainPage