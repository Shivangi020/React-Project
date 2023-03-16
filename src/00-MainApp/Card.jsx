import React from 'react'

import goalThumbnail from '../Image/goal.png'
import './MainApp.css'

function Card({navigateHandler}) {
 

  return (
    <div className='card-cn' onClick={()=>navigateHandler('/togoal')}>
        <div className='image-cn'>
            <img src={goalThumbnail} alt='Goal'></img>
        </div>
        <div className='detail-cn'>
            <div className='app-title'>To-Goal</div>
        </div>
    </div>
  )
}

export default Card