import React ,{useState , createContext} from 'react'
import CardSection from './CardSection';
import './Tour.css'


export const TourGlobalData = createContext()

function TourMainPage() {
  const [tour ,setTour] = useState(null);
  return (
    <TourGlobalData.Provider value={{tour,setTour}}>
    <div className='tour-main-page'>
       <div className='tour-heading'>Our Tours</div>
       <hr className='heading-hr'></hr>
       <CardSection/>
    </div>
    </TourGlobalData.Provider>
  )
}

export default TourMainPage