import React from 'react'



function Card({path,title,thumbnail}) {
  return (
    <a href={path} className='card-link'>
    <div className='card-cn'>
        <div className='image-cn'>
            <img src={thumbnail} alt='Goal'></img>
        </div>
        <div className='detail-cn'>
            <div className='app-title'>{title}</div>
        </div>
    </div>
    </a>

  )
}

export default Card