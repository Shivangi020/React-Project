import React from 'react'
import { Link } from 'react-router-dom'
import './MainApp.css'

function Card({navigateHandler,path,title,thumbnail}) {
 

  return (
    <Link to='https://money-miser.netlify.app/'>
    <div className='card-cn' onClick={()=>navigateHandler(path)}>
        <div className='image-cn'>
            <img src={thumbnail} alt='Goal'></img>
        </div>
        <div className='detail-cn'>
            <div className='app-title'>{title}</div>
        </div>
    </div>
    </Link>

  )
}

export default Card