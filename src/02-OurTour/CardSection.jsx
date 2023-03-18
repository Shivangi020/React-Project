import React from 'react'
import TourCard from './Card'
import Loading from './Loading'
import Error from './Error'
import useFetch from './useFetch'


function CardSection() {
  const {isLoading,error,tour} = useFetch('https://course-api.com/react-tours-project')

  if(isLoading){
    return <Loading/>
  }else if(error){
    return <Error/>
  }
  return (
    <div className='tour-cards'>
    {tour.map((item)=>{
      const {id,name,price,info,image} = item
      return <TourCard  name={name} price={price} info={info} image={image} key={id}/>
    })}
   </div>
  )
}

export default CardSection