import React from 'react'


function TourCard({image,price,info,name}) {
  return (
    <div className='tour-card'>
        <section className='tour-image'>
            <img src={image} alt={name}></img>
        </section>
        <span className='tour-price'>$ {price}</span>
        <section className='tour-detail'>
            <h5 className='tour-name'>{name}</h5>
            <article className='tour-info'>
                <p>{info}</p>
            </article>
            <button className='tour-delete-btn'>Not Interested</button>
        </section>
    </div>
  )
}

export default TourCard