import React from 'react'
import './MainApp.css'

function Card({navigateHandler,path,title,thumbnail}) {
 

  return (
    <div className='card-cn' onClick={()=>navigateHandler(path)}>
        <div className='image-cn'>
            <img src={thumbnail} alt='Goal'></img>
        </div>
        <div className='detail-cn'>
            <div className='app-title'>{title}</div>
        </div>
    </div>
  )
}

export default Card