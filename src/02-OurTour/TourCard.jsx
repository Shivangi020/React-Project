import React from 'react'

function TourCard() {
  return (
    <div className='tour-card'>
        <section className='tour-image'>
            <img src='https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg'></img>
        </section>
        <section className='tour-detail'>
            <p className='tour-name'>Best of Paris in 7 Days Tour</p>
            <article className='tour-info'>
                <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, 
                    food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will 
                    immerse you in the very best of the City of Light: the masterpiece-packed Louvre and
                     Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and 
                     extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the 
                     city's historic heart as well as quieter moments to slow down and savor the city's intimate 
                     cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!</p>
            </article>
            <button>Not Interested</button>
        </section>
    </div>
  )
}

export default TourCard